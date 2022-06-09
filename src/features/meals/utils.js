import moment from "moment";
import * as zod from "zod";

export const initialValue = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().endOf("month").format("YYYY-MM-DD"),
  member: "",
  initialBalance: 0,
};

export const validationSchema = zod.object({
  startDate: zod?.date("required"),
  endDate: zod?.date("required"),
  member: zod.object(
    {
      value: zod.string(),
      label: zod.string(),
    },
  ),
  initialBalance: zod?.number(),
})
.refine((obj) => obj.startDate <= obj.endDate, {
  message: "End Date must be greater than Start Date",
  path: ["endDate"],
});;
