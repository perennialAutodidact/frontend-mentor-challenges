import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "../../styles/ccDetailForm.module.scss";
interface FormData {
  cardholderName: string;
  ccNumber: string;
  expireMonth: string;
  expireYear: string;
  cvc: string;
}

const Form = () => {
  const schema = z.object({
    cardholderName: z.string().min(1),
    ccNumber: z.string().min(16),
    expireMonth: z
      .string()
      .length(2)
      .regex(new RegExp("d"), "Must contain only numbers."),
    expireYear: z.string().length(2),
    cvc: z.string().min(3).regex(new RegExp("d"), "Must contain only numbers."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
      <div className={`${styles.inputGroup}`}>
        <label htmlFor="cardholderName">
          <p className={`${styles.formLabel}`}>CARDHOLDER NAME</p>
          <input
            {...register("cardholderName")}
            className={`${styles.formInput}`}
            placeholder="e.g. Manish Patel"
          />
        </label>
      </div>
      <div className={`${styles.inputGroup}`}>
        <label htmlFor="ccNumber">
          <p className={`${styles.formLabel}`}>CARD NUMBER</p>
          <input
            {...register("ccNumber")}
            className={`${styles.formInput}`}
            placeholder="e.g. 2222 3333 4444 5555"
          />
        </label>
      </div>
      <div className={`${styles.inputGroup}`}>
        <label htmlFor="expireMonth">
          <p className={`${styles.formLabel}`}>Exp. Date (MM/YY)</p>
          <input
            {...register("expireMonth")}
            className={`${styles.formInput}`}
            placeholder="MM"
          />
          <input
            {...register("expireYear")}
            className={`${styles.formInput}`}
            placeholder="YY"
          />
        </label>
      </div>
      <div className={`${styles.inputGroup}`}>
        <label htmlFor="expireMonth">
          <p className={`${styles.formLabel}`}>CVC</p>
          <input
            {...register("cvc")}
            className={`${styles.formInput}`}
            placeholder="e.g. 123"
          />
        </label>
      </div>
      <button type="submit" className={`${styles.formButton}`}>Confirm</button>
    </form>
  );
};

export default Form;
