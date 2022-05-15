import * as zod from 'zod';

export const initialValue = {
  username: "",
  password: "",
  gender:JSON.stringify({
    value: 1,
    label: "Male",
  })
};

export const validationSchema = zod.object({
    username:zod?.string("required")?.min(1),
    password:zod.string()?.min(5,"At least 5")
});
