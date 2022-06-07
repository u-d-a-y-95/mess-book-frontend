import * as zod from "zod";

export const initialValue = {
  startDate: new Date().toISOString().slice(0, 10),
  endDate: new Date().toISOString().slice(0, 10),
  member: "",
  initialBalance: 10,
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
});
