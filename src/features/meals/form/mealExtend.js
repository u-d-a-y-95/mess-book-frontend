import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPipelineById } from "../helper";

const PipelineExtend = () => {
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
  const users = [
    {
      id: 1,
      name: "Jenith",
    },
    {
      id: 2,
      name: "Fahim",
    },
    {
      id: 3,
      name: "Rizvy",
    },
    {
      id: 4,
      name: "Shibly",
    },
    {
      id: 5,
      name: "Soumittra",
    },
    {
      id: 6,
      name: "Uday",
    },
  ];
  const [data, setData] = useState([
    {
      day: 1,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 2,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 3,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 4,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 5,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 6,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 7,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 8,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 9,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 10,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 11,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 12,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 13,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 14,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 15,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 16,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 17,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 18,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 19,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 20,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 21,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 22,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 23,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 24,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 25,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 26,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 27,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 28,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 29,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 30,
      meals: [3, 2, 1, 4, 2, 4],
    },
    {
      day: 31,
      meals: [3, 2, 1, 4, 2, 4],
    },
  ]);

  const [userBalance, setUserBalance] = useState([
    {
      name: "Jenith",
      currentAddAmount: 2400,
      previousBalance: -200,
      totalAmount: 2200,
      spentAmount: 1000,
      remainingAmount: 1200,
    },
    {
      name: "Fahim",
      currentAddAmount: 1600,
      previousBalance: 100,
      totalAmount: 1700,
      spentAmount: 1000,
      remainingAmount: 700,
    },
    {
      name: "Fahim",
      currentAddAmount: 1600,
      previousBalance: 100,
      totalAmount: 1700,
      spentAmount: 1000,
      remainingAmount: 700,
    },
    {
      name: "Soumittra",
      currentAddAmount: 1600,
      previousBalance: 100,
      totalAmount: 1700,
      spentAmount: 1000,
      remainingAmount: 700,
    },
    {
      name: "Fahim",
      currentAddAmount: 1600,
      previousBalance: 100,
      totalAmount: 1700,
      spentAmount: 1000,
      remainingAmount: 700,
    },
    {
      name: "Fahim",
      currentAddAmount: 1600,
      previousBalance: 100,
      totalAmount: 1700,
      spentAmount: 1000,
      remainingAmount: 700,
    },
  ]);

  const changeMealCount = (value, index, mealIndex) => {
    pipelineDetails.meals[index][mealIndex]["noOfMeal"] = +value;
    setPipelineDetails({ ...pipelineDetails });
  };

  const getTotalMeal = (index, data) => {
    return data?.reduce((acc, item) => acc + +item[index]["noOfMeal"], 0);
  };

  const getTotal = (key, data) => {
    return data?.reduce((acc, item) => acc + +item?.[key], 0);
  };

  // const getUserObj = (amount, obj) => {
  //   return {
  //     ...obj,
  //     depositAmount: +amount || "",
  //     totalAmount:+amount + +obj?.initialBalance,

  //   };
  // };

  const changeUserDepositAmount = (amount, index) => {
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
        <div className="flex ">
          <div className="border w-16 p-2 break-all text-sm w-24">
            Day / Name
          </div>
          {pipelineDetails?.users?.map((item, index) => (
            <div
              key={item?.user?.id}
              className="border w-16 p-2 break-all text-sm"
            >
              {item?.user?.name}
            </div>
          ))}
        </div>
        <div className="h-full overflow-auto">
          {pipelineDetails?.meals?.map((item, index) => (
            <div key={index} className="flex">
              {item?.map((user, mealIndex) => (
                <>
                  {mealIndex === 0 && (
                    <div className="border text-center text-sm flex justify-center items-center w-24 ">
                      {moment(user?.date).format("DD/MM/YYYY")}
                    </div>
                  )}
                  {mealIndex !== 0 && (
                    <div
                      key={mealIndex}
                      className="border text-center text-sm w-16 h-8"
                    >
                      <input
                        type="number"
                        className="w-full text-center h-full"
                        value={user?.noOfMeal}
                        onChange={(e) =>
                          changeMealCount(e?.target?.value, index, mealIndex)
                        }
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>

        <div className="flex">
          <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
            Total
          </td>
          {pipelineDetails?.users?.map((item, index) => (
            <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
              {getTotalMeal(index + 1, pipelineDetails?.meals)}
            </td>
          ))}
        </div>
      </div>
      <div className="">
        <table className="w-full">
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
            <th className="border w-32  p-2 break-words text-sm">Total Meal</th>
            <td className="border  p-2 break-words text-sm bg-green-100">
              {aggrigateValue?.totalMeal}
            </td>
          </tr>
          <tr>
            <th className="border w-32 p-2 break-words text-sm">
              Per Meal Cost
            </th>
            <td className="border p-2 break-words text-sm bg-green-100">
              {aggrigateValue?.perMealCost}
            </td>
          </tr>
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
              <tr>
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
                {getTotal("spentAmount", pipelineDetails?.users)}
              </td>
              <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                {getTotal("remainingAmount", pipelineDetails?.users)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col" style={{ height: "80vh" }}>
        <div className="flex ">
          <div className="border w-24 p-2 break-all text-sm ">Day / Name</div>
          <div className="border p-2 break-all text-sm w-24">Amount</div>
          <div className="border p-2 break-all text-sm w-24">Remaining</div>
        </div>
        <div className="h-full overflow-auto">
          {pipelineDetails?.expenses?.map((item, index) => (
            <div key={index} className="flex">
              <div className="border text-center text-sm w-24 px-2 py-1">
                {moment(item?.date).format("DD/MM/YYYY")}
              </div>
              <div className="border text-center text-sm w-24">
                <input
                  className="w-full h-full text-center"
                  type="number"
                  value={item?.expense}
                  onChange={(e) => {
                    console.log(e?.target?.value);
                    changeExpense(e?.target?.value, index);
                  }}
                />
              </div>
              <div className="border text-center text-sm w-24 px-2 py-1">0</div>
            </div>
          ))}
        </div>
        <div className="flex">
          <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
            Total
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
            {aggrigateValue?.totalExpense}
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
            {/* {getTotalMeal(1, data)} */}
          </td>
        </div>
      </div>
    </div>
  );
};

export default PipelineExtend;
