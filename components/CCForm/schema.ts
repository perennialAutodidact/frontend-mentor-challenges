import * as z from "zod";

export const schema: z.ZodSchema = z.object({
  cardholderName: z
    .string()
    .regex(new RegExp(/^[A-z ,.'-]+$/), "Invalid format. ")
    .min(1, "Cannot be blank."),
  ccNumber: z
    .string()
    .min(19, "Not enough numbers.")
    .max(19, "Too many numbers.")
    .regex(
      new RegExp(/\d{4} \d{4} \d{4} \d{4}/),
      "Invalid format. Numbers only."
    ),
  expirationDate: z.object({
    month: z
      .string()
      .min(1, "Cannot be blank.")
      .regex(new RegExp(/\d/), "Must contain only numbers.")
      .length(2, "Needs two numbers."),
    year: z
      .string()
      .min(1, "Cannot be blank.")
      .regex(new RegExp(/\d/), "Must contain only numbers.")
      .length(2, "Needs two numbers."),
  }),
  cvc: z
    .string()
    .min(1, "Cannot be blank.")
    .length(3)
    .regex(new RegExp(/\d/), "Must contain only numbers."),
});
