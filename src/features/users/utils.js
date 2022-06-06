import * as zod from "zod";

export const initialValue = {
  username: "",
  password: "",
  gender: JSON.stringify({
    value: 1,
    label: "Male",
  }),
};

export const validationSchema = zod.object({
  name: zod?.string("required")?.min(4, "At least 4 characters are required"),
  email: zod.string()?.email()?.optional(),
  mobile: zod?.string()?.min(11),
  gender: zod
    ?.string()
    ?.min(1)
    ?.transform((v) => JSON.parse(v)),
});

export const createValidationSchema = validationSchema
  .extend({
    name: zod?.string("required")?.min(4, "At least 4 characters are required"),
    email: zod.string()?.email()?.optional(),
    mobile: zod?.string()?.min(11),
    gender: zod
      ?.string()
      ?.min(1)
      ?.transform((v) => JSON.parse(v)),
    password: zod?.string()?.min(3, "At least 3 characters are required"),
    confirmPassword: zod?.string(),
  })
  .refine((obj) => obj.password === obj.confirmPassword, {
    message: "Confirm password should be equal",
    path: ["confirmPassword"],
  });
