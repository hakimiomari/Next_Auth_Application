import { z } from "zod";

const FormDataSchema = z.object({
  name: z.string().min(3, { message: "Name is required and at least 3 character" }),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6,{message: "Password is required and at least 6 character"})
});

export const requiredData = FormDataSchema.required({
  name: true,
  email: true,
  password: true,
});
