import * as zod from 'zod';

export const initialValue = {
  mobile: "",
  password: "",
};

export const validationSchema = zod.object({
    mobile:zod?.string()?.min(1,"required"),
    password:zod.string()?.min(1,"required")
});
