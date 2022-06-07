import * as zod from "zod";

export const initialValue = {
  username: "",
  password: "",
  gender: {
    value: 1,
    label: "Male",
  },
};

export const validationSchema = zod.object({
  name: zod?.string("required")?.min(4, "At least 4 characters are required"),
  email: zod.string()?.email()?.optional(),
  mobile: zod?.string()?.min(11),
  gender: zod.object(
    {
      value: zod.number().int().positive(),
      label: zod.string(),
    },
    "Gender is required"
  ),
});

export const createValidationSchema = validationSchema
  .extend({
    password: zod?.string()?.min(3, "At least 3 characters are required"),
    confirmPassword: zod?.string(),
  })
  .refine((obj) => obj.password === obj.confirmPassword, {
    message: "Confirm password should be equal",
    path: ["confirmPassword"],
  });
