import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPipelineById } from "../helper";
import io from "socket.io-client";
import Expense from "./components/expense";
import Meal from "./components/meal";
import { getDayDiff, getFormattedMeals, getFormattedUsers } from "../utils";
import User from "./components/users";
import Summary from "./components/summary";

const PipelineExtend = () => {
  const [socket, setSocket] = useState(null);
  const params = useParams();
  const [aggrigateValue, setAggregateValue] = useState({});
  const [meals, setMeals] = useState([]);
  const [users, setUsers] = useState([]);
  const [userWiseTotalMeal, setUserWiseTotalMeal] = useState([]);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    if (params?.pipelineId) {
      getPipelineById(params?.pipelineId, (data) => {
        const diff = getDayDiff(data.startDate, data?.endDate);
        const [meals, userWiseTotalMeal] = getFormattedMeals(data.meals, diff);
        const users = getFormattedUsers(data.users);
        setMeals(meals);
        setUserWiseTotalMeal(userWiseTotalMeal);
        setExpenses(data.expenses);
        setUsers(users);
      });
    }
  }, [params?.pipelineId]);

  useEffect(() => {
    if (!socket) {
      setSocket(io.connect(process.env.REACT_APP_API_BASE_URL || "http://localhost:4000"));
    }
    if (socket) {
      socket.on("connect", () => {
        socket.on("changeMealClient", changeMealClient);
        socket.on("changeUserClient", changeUsersClient);
        socket.on("changeExpenseClient", changeExpenseClient);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  //socket on event
  const changeMealClient = (value) => {
    const { index, mealIndex, updatedData } = value;
    setMealsData(updatedData.noOfMeal, index, mealIndex);
  };
  const changeUsersClient = (value) => {
    const { index, newAmount } = value;
    setUsersData(newAmount, index);
  };
  const changeExpenseClient = (value) => {
    const { expense, index } = value;
    setExpenseData(expense, index);
  };

  // upadete user wise total meals
  useEffect(() => {
    setUserWiseTotalMeal(
      meals?.reduce((acc, item) => {
        item?.forEach((obj, index) => {
          if (index !== 0) {
            if (!acc[index - 1]) {
              acc[index - 1] = 0;
            }
            acc[index - 1] += +obj.noOfMeal;
          }
        });
        return acc;
      }, [])
    );
  }, [meals]);

  // update aggregte value total meal and per meal cost
  useEffect(() => {
    setAggregateValue((prev) => {
      prev["totalMeal"] = userWiseTotalMeal?.reduce(
        (acc, item) => acc + +item,
        0
      );
      prev["perMealCost"] = prev?.totalExpense / (prev?.totalMeal || 1);
      return { ...prev };
    });
  }, [userWiseTotalMeal]);

  // update aggregte value total balance
  useEffect(() => {
    setAggregateValue((prev) => {
      prev["totalBalance"] = users?.reduce(
        (acc, item) => acc + +item?.totalAmount,
        0
      );
      return { ...prev };
    });
  }, [users]);

  // update aggregte value total expense and permeal cost
  useEffect(() => {
    setAggregateValue((prev) => {
      prev["totalExpense"] = expenses?.reduce(
        (acc, item) => acc + +item?.expense,
        0
      );
      prev["perMealCost"] = prev?.totalExpense / (prev?.totalMeal || 1);
      return { ...prev };
    });
  }, [expenses]);

  const getTotal = (key, data) => {
    return data?.reduce((acc, item) => acc + +item?.[key], 0);
  };

  const changeMealCount = (value, index, mealIndex) => {
    socket.emit("changeMeal", {
      mealObj: meals[index][mealIndex],
      meal: value,
      index,
      mealIndex,
    });
    setMealsData(value, index, mealIndex);
  };

  const changeUserDepositAmount = (amount, index) => {
    socket.emit("changeUser", {
      pipelineId: params?.pipelineId,
      user: users[index],
      index,
      newAmount: amount,
    });
    setUsersData(amount, index);
  };

  const changeExpense = (amount, index) => {
    socket.emit("changeExpense", {
      ...expenses[index],
      expense: amount,
      index,
    });
    setExpenseData(amount, index);
  };

  const setMealsData = (value, index, mealIndex) => {
    setMeals((prevMeals) => {
      prevMeals[index][mealIndex]["noOfMeal"] = +value;
      return [...prevMeals];
    });
  };

  const setUsersData = (amount, index) => {
    setUsers((prevUsers) => {
      prevUsers[index]["depositAmount"] = amount ?? "";
      prevUsers[index]["totalAmount"] =
        +prevUsers[index]["depositAmount"] +
        +prevUsers[index]["initialBalance"];
      return [...prevUsers];
    });
  };

  const setExpenseData = (amount, index) => {
    setExpenses((prevExpenses) => {
      prevExpenses[index]["expense"] = +amount || "";
      return [...prevExpenses];
    });
  };

  return (
    <div className="flex bg-white justify-between">
      <div className="flex flex-col" style={{ height: "80vh" }}>
        <Meal
          meals={meals}
          users={users}
          userWiseTotalMeal={userWiseTotalMeal}
          changeMealCount={changeMealCount}
        />
      </div>
      <div>
        <Summary aggrigateValue={aggrigateValue} />
        <User
          users={users}
          changeUserDepositAmount={changeUserDepositAmount}
          getTotal={getTotal}
          aggrigateValue={aggrigateValue}
          userWiseTotalMeal={userWiseTotalMeal}
        />
      </div>
      <div className="flex flex-col justify-start" style={{ height: "80vh" }}>
        <Expense
          expenses={expenses}
          changeExpense={changeExpense}
          aggrigateValue={aggrigateValue}
        />
      </div>
    </div>
  );
};

export default PipelineExtend;
