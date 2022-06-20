import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPipelineById } from "../helper";
import io from "socket.io-client";
import Expense from "./components/expense";
import Meal from "./components/meal";

const PipelineExtend = () => {
  const [socket, setSocket] = useState(null);
  const params = useParams();
  const [aggrigateValue, setAggregateValue] = useState({});
  const [pipelineDetails, setPipelineDetails] = useState({
    meals: [],
  });

  useEffect(() => {
    if (params?.pipelineId) {
      getPipelineById(params?.pipelineId, setPipelineDetails);
    }
  }, [params?.pipelineId]);

  const changeMealCount = (value, index, mealIndex) => {
    socket.emit("changeMeal", {
      mealObj: pipelineDetails.meals[index][mealIndex],
      meal: value,
      index,
      mealIndex,
    });
    pipelineDetails.meals[index][mealIndex]["noOfMeal"] = +value;
    setPipelineDetails({ ...pipelineDetails });
  };

  useEffect(() => {
    if (!socket) {
      setSocket(io.connect("http://localhost:4000"));
    }
    if (socket) {
      socket.on("connect", () => {
        socket.on("changeMealClient", (value) => {
          console.log(value, "TEST");
          const { index, mealIndex, updatedData } = value;
          setPipelineDetails((pipelineDetails) => {
            pipelineDetails.meals[index][mealIndex].noOfMeal =
              updatedData.noOfMeal;
            return { ...pipelineDetails };
          });
        });
        socket.on("changeUserDepositAmountClient", (value) => {
          const { index, newAmount } = value;
          setPipelineDetails((pipelineDetails) => {
            pipelineDetails.users[index]["depositAmount"] = newAmount;
            pipelineDetails.users[index]["totalAmount"] =
              +pipelineDetails.users[index]["depositAmount"] +
              +pipelineDetails.users[index]["initialBalance"];
            return { ...pipelineDetails };
          });
        });
      });
    }
  }, [socket]);

  const getTotalMeal = (index, data) => {
    return data?.reduce((acc, item) => acc + +item[index]["noOfMeal"], 0);
  };

  const getTotal = (key, data) => {
    return data?.reduce((acc, item) => acc + +item?.[key], 0);
  };

  const changeUserDepositAmount = (amount, index) => {
    socket.emit("changeUserDepositAmount", {
      pipelineId: params?.pipelineId,
      user: pipelineDetails.users[index],
      index,
      newAmount: amount,
    });
    pipelineDetails.users[index]["depositAmount"] = +amount || "";
    pipelineDetails.users[index]["totalAmount"] =
      +pipelineDetails.users[index]["depositAmount"] +
      +pipelineDetails.users[index]["initialBalance"];
    setPipelineDetails({
      ...pipelineDetails,
    });
  };
  const changeExpense = (amount, index) => {
    pipelineDetails.expenses[index]["expense"] = +amount || "";
    setPipelineDetails({
      ...pipelineDetails,
    });
  };

  useEffect(() => {
    const obj = {
      meals: [],
      totalBalance: getTotal("totalAmount", pipelineDetails?.users),
      totalMeal: pipelineDetails?.meals?.reduce(
        (acc, item) => acc + +item?.reduce((a, i) => a + +i?.noOfMeal || 0, 0),
        0
      ),
      totalExpense: pipelineDetails?.expenses?.reduce(
        (acc, item) => acc + +item.expense,
        0
      ),
    };
    obj["perMealCost"] = +(
      aggrigateValue?.totalExpense / (aggrigateValue?.totalMeal || 1)
    ).toFixed(2);
    setAggregateValue(obj);
  }, [pipelineDetails]);

  return (
    <div className="flex bg-white justify-between">
      <div className="flex flex-col" style={{ height: "80vh" }}>
        <Meal
          pipelineDetails={pipelineDetails}
          changeMealCount={changeMealCount}
          getTotalMeal={getTotalMeal}
        />
      </div>
      <div className="">
        <table className="w-full">
          <tbody>
            <tr>
              <th className="border w-32  p-2 break-words text-sm">
                Total Balance
              </th>
              <td className="border  p-2 break-words text-sm bg-green-100">
                {aggrigateValue?.totalBalance}
              </td>
            </tr>
            <tr>
              <th className="border w-32  p-2 break-words text-sm">
                Total Expense
              </th>
              <td className="border  p-2 break-words text-sm bg-green-100">
                {aggrigateValue?.totalExpense}
              </td>
            </tr>
            <tr>
              <th className="border w-32  p-2 break-words text-sm">
                Total Meal
              </th>
              <td className="border  p-2 break-words text-sm bg-green-100">
                {aggrigateValue?.totalMeal}
              </td>
            </tr>
            <tr>
              <th className="border w-32 p-2 break-words text-sm">
                Per Meal Cost
              </th>
              <td className="border p-2 break-words text-sm bg-green-100">
                {aggrigateValue?.perMealCost || ""}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="mt-4">
          <thead>
            <tr>
              <th className="border w-16 p-2 break-words text-sm">Name</th>
              <th className="border w-16 p-2 break-words text-sm">
                Current Amount
              </th>
              <th className="border w-16 p-2 break-words text-sm">
                Previous Amount
              </th>
              <th className="border w-16 p-2 break-words text-sm">
                Total Amount
              </th>
              <th className="border w-16 p-2 break-words text-sm">
                Spent Amount
              </th>
              <th className="border w-16 p-2 break-words text-sm">
                Remaining Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {pipelineDetails?.users?.map((item, index) => (
              <tr key={item?._id}>
                <td className="border text-center text-sm py-1 h-8">
                  {item?.user?.name}
                </td>
                <td className="border text-sm h-8">
                  <input
                    className="w-full h-full text-center"
                    value={item?.depositAmount}
                    type="number"
                    onChange={(e) => {
                      changeUserDepositAmount(e?.target?.value, index);
                    }}
                  />
                </td>
                <td className="border text-center text-sm py-1 h-8 ">
                  {item?.initialBalance}
                </td>
                <td className="border text-center text-sm py-1 h-8 ">
                  {item?.totalAmount}
                </td>
                <td className="border text-center text-sm py-1 h-8 ">
                  {getTotalMeal(index + 1, pipelineDetails?.meals) *
                    aggrigateValue?.perMealCost}
                </td>
                <td className="border text-center text-sm py-1 h-8 ">
                  {item?.totalAmount -
                    getTotalMeal(index + 1, pipelineDetails?.meals) *
                      aggrigateValue?.perMealCost}
                </td>
              </tr>
            ))}

            <tr>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                Total
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("depositAmount", pipelineDetails?.users)}
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("initialBalance", pipelineDetails?.users)}
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("totalAmount", pipelineDetails?.users)}
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("spentAmount", pipelineDetails?.users) || ""}
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("remainingAmount", pipelineDetails?.users) || ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col" style={{ height: "80vh" }}>
        <Expense
          pipelineDetails={pipelineDetails}
          changeExpense={changeExpense}
          aggrigateValue={aggrigateValue}
        />
      </div>
    </div>
  );
};

export default PipelineExtend;
