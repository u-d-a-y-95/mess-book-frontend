import * as zod from "zod";

export const initialValue = {
  workSpaceName: "",
  workSpaceEmail: "",
  name: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = zod
  .object({
    workSpaceName: zod.string("required"),
    workSpaceEmail: zod.string().email(),
    name: zod.string(),
    mobile: zod.string().min(11, "Valid mobile number is required"),
    password: zod.string().min(3, "At least 3 characters are required"),
    confirmPassword: zod.string(),
  })
  .refine((obj) => obj.password === obj.confirmPassword, {
    message: "Confirm password should be equal",
    path: ["confirmPassword"],
  });
