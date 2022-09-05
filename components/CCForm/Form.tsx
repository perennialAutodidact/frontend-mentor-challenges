import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import styles from "styles/pages/CCForm/CCForm.module.scss";
import Input from "./Input";

export type FormData = {
  cardholderName: string;
  ccNumber: string;
  expirationDate: {
    month: string;
    year: string;
  };
  cvc: string;
};

export type ActiveElement = Element | null;

const defaultValues: FormData = {
  cardholderName: "",
  ccNumber: "",
  expirationDate: {
    month: "",
    year: "",
  },
  cvc: "",
};

interface FormProps {
  toggleComplete: React.FormEventHandler;
}

const Form: React.FC<FormProps> = ({ toggleComplete }: FormProps) => {
  const [activeElement, setActiveElement] = useState<ActiveElement>(null);

  const onFocusHandler = () => (e: React.FocusEvent<HTMLInputElement>) => {
    setActiveElement(e.target);
  };
  const onBlurHandler = () => (e: React.FocusEvent) => {
    setActiveElement(null);
  };

  const onSubmit = async (data: FormData, e: any) => {
    try {
      console.log({ success: data });
      toggleComplete(e);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} container`}
    >
      <div className="row">
        <label htmlFor="cardholderName">
          <h6 className={`${styles.formLabel}`}>CARDHOLDER NAME</h6>
        </label>
        <Controller
          name="cardholderName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={"e.g. Ravi Shankar"}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              errors={errors}
              activeElement={activeElement}
            />
          )}
        />
        <div className="row">
          {errors?.cardholderName && (
            <div className={styles.formErrorMessage}>
              {errors?.cardholderName.message}
            </div>
          )}
        </div>
        <label htmlFor="ccNumber">
          <h6 className={`${styles.formLabel}`}>CARD NUMBER</h6>
        </label>

        <Controller
          name="ccNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={"1234 5678 9123 0000"}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              errors={errors}
              activeElement={activeElement}
            />
          )}
        />
        <div className="row">
          {errors?.ccNumber && (
            <div className={styles.formErrorMessage}>
              {errors?.ccNumber.message}
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="twelve columns">
          <label htmlFor="expirationDate" className="six columns">
            <h6 className={`${styles.formLabel}`}>Exp. Date (MM/YY)</h6>
          </label>
          <label htmlFor="cvc" className="six columns">
            <h6 className={`${styles.formLabel}`}>CVC</h6>
          </label>
          <div className={`row`}>
            <div className={`three columns ${styles["me-sm-5px"]}`}>
              <Controller
                name="expirationDate.month"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"MM"}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    errors={errors}
                    activeElement={activeElement}
                  />
                )}
              />
            </div>
            <div className={`three columns ${styles["me-sm-5px"]}`}>
              <Controller
                name="expirationDate.year"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"YY"}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    errors={errors}
                    activeElement={activeElement}
                  />
                )}
              />
            </div>
            <div className={`six columns ${styles["ms-sm-10px"]}`}>
              <Controller
                name="cvc"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"e.g. 456"}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    errors={errors}
                    activeElement={activeElement}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            {errors.expirationDate?.month && (
              <div className={styles.formErrorMessage}>
                {"month" in errors.expirationDate &&
                  "year" in errors.expirationDate && (
                    <>
                      <strong>Month</strong> <br />
                    </>
                  )}
                {errors.expirationDate.month.message}
              </div>
            )}
            {errors.expirationDate?.year && (
              <div className={styles.formErrorMessage}>
                {"month" in errors.expirationDate &&
                  "year" in errors.expirationDate && (
                    <>
                      <strong>Year</strong>
                      <br />
                    </>
                  )}
                {errors.expirationDate.year.message}
              </div>
            )}
          </div>
          <div
            className={`six columns ${
              !errors.expirationDate && "offset-by-six columns"
            }`}
          >
            {errors?.cvc && (
              <div className={styles.formErrorMessage}>
                {errors?.cvc.message}
              </div>
            )}
          </div>
        </div>
        {/* <Input
            name="cvc"
            // classnames="twelve columns"
            placeholder="e.g. 123"
          /> */}
      </div>
      <button type="submit" className={`${styles.formButton} twelve columns`}>
        Confirm
      </button>
    </form>
  );
};

export default Form;

// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { schema as formSchema } from "./schema";

// type FormData = {
//   expirationDate: {
//     month: string;
//     year: string;
//   };
// };

// const defaultValues: FormData = {
//   expirationDate: {
//     month: "",
//     year: ""
//   }
// };

// const Form: React.FC = () => {
//   const { handleSubmit, control } = useForm<FormData>({
//     defaultValues,
//     resolver: zodResolver(formSchema)
//   });

//   const submitHandler = (data: FormData) => console.log("FARTS");

//   return (
//     <form
//       onSubmit={() => handleSubmit(submitHandler)}
//       onError={() => console.log("blah")}
//     >
//       <Controller
//         name="expirationDate.month"
//         control={control}
//         render={({ field }) => <input placeholder="MM" {...field} />}
//       />
//       <br />
//       <Controller
//         name="expirationDate.year"
//         control={control}
//         render={({ field }) => <input placeholder="YY" {...field} />}
//       />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
