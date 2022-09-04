import * as z from 'zod'

export const schema = z.object({
    cardholderName: z.string().min(1, 'Cannot be blank.'),
    ccNumber: z
        .string()
        .min(20, 'Not enough numbers.')
        .regex(new RegExp("\d{4} \d{4} \d{4} \d{4}"), "Wrong format. Numbers only."),
    expireDate: z.object({
        month: z
            .string()
            .min(1, 'Cannot be blank.')
            .length(2)
            .regex(new RegExp("d"), "Must contain only numbers."),
        year: z
            .string()
            .min(1, 'Cannot be blank.')
            .length(2),
    }),
    cvc: z
        .string()
        .min(1, 'Cannot be blank.')
        .length(3)
        .regex(new RegExp("\d"), "Must contain only numbers."),
});