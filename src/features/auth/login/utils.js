import * as zod from "zod";

export const initialValue = {
  workSpaceEmail: "",
  mobile: "",
  password: "",
};

export const validationSchema = zod.object({
  workSpaceEmail: zod.string().email(),
  mobile: zod?.string()?.min(1, "required"),
  password: zod.string()?.min(1, "required"),
});
