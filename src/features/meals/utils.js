import moment from "moment";
import * as zod from "zod";

export const initialValue = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().endOf("month").format("YYYY-MM-DD"),
  member: "",
  initialBalance: 0,
};

export const validationSchema = zod
  .object({
    startDate: zod?.date("required"),
    endDate: zod?.date("required"),
    member: zod.object({
      value: zod.string(),
      label: zod.string(),
    }),
    initialBalance: zod?.number(),
  })
  .refine((obj) => obj.startDate <= obj.endDate, {
    message: "End Date must be greater than Start Date",
    path: ["endDate"],
  });
export const editViewValidationSchema = zod
  .object({
    member: zod.object({
      value: zod.string(),
      label: zod.string(),
    }),
    initialBalance: zod?.number(),
  })

export const getDayDiff = (startDate, endDate) => {
  return moment(endDate).diff(moment(startDate), "days");
};

export const getFormattedMeals = (meals, diff) => {
  const data = [];
  const userWiseTotalMeal = [];
  let count = 0;
  let userIndex = 0;
  for (let i = 0; i < meals?.length; i++) {
    if (!data[count]) {
      data[count] = [
        {
          date: meals[i].date,
        },
      ];
    }
    if (!userWiseTotalMeal[userIndex]) {
      userWiseTotalMeal[userIndex] = 0;
    }
    data[count].push(meals[i]);
    userWiseTotalMeal[userIndex] += +meals[i]?.noOfMeal;
    count++;
    if (count === diff + 1) {
      count = 0;
      userIndex++;
    }
  }
  return [data, userWiseTotalMeal];
};

export const getFormattedUsers = (users) => {
  return users?.map((item) => ({
    ...item,
    totalAmount: +item?.depositAmount + +item?.initialBalance,
  }));
};
