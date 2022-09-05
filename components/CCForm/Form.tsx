import React, { useState } from "react";
import {
  useForm,
  FieldErrors,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import styles from "styles/pages/CCForm/CCForm.module.scss";
// import Input from "./Input";
import { ErrorMessage } from "@hookform/error-message";
import Input from "./Input";

export type FormData = {
  //   cardholderName: string;
  //   ccNumber: string;
  expirationDate: {
    month: string;
    year: string;
  };
  cvc: string;
};

const defaultValues: FormData = {
  //   cardholderName: "",
  //   ccNumber: "",
  expirationDate: {
    month: "",
    year: "",
  },
  cvc: "",
};

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const [activeElement, setActiveElement] = useState<Element | null>(null);

  const onFocus = (e: React.FocusEvent) => {
    setActiveElement(e.target);
  };
  const onBlur = (e: React.FocusEvent) => {
    setActiveElement(null);
  };
  const onSubmit = (data: FormData) => {
    console.log("BLAHBLAHBLAH");
    console.log(data);
    console.log({ errors });
  };
  const onError = (errors: FieldErrors) => {
    console.log(errors);
    // console.log(errors)
  };

  const formatExpirationDateErrors = (
    errors: Merge<
      FieldError,
      FieldErrorsImpl<{
        month: string;
        year: string;
      }>
    >
  ): string[] => {
    let fieldErrors = Object.keys(errors).reduce((prev, curr, i, arr) => {
      console.log({ prev, curr, i, arr });
    }, []);
    return ["error"];
  };
  // const { activeElement, listenersReady } = useActiveElement()
  // if (!listenersReady) {
  //     return <></>
  // }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={`${styles.form} container`}
    >
      {/* <div className="row">

                <label htmlFor="cardholderName">
                    <h6 className={`${styles.formLabel}`}>CARDHOLDER NAME</h6>
                </label>
                <Input
                    placeholder="e.g. Manish Patel"
                    // classnames="twelve columns"
                    name='cardholderName'
                />
                <label htmlFor="ccNumber">
                    <h6 className={`${styles.formLabel}`}>CARD NUMBER</h6>
                </label>

                <Input
                    control={control}
                    name='ccNumber'
                    // classnames="twelve columns"
                    placeholder="e.g. 1234 5678 9123 0000"
                />

            </div> */}
      <div className="row">
        <div className="twelve columns">
          <label htmlFor="expirationDate" className="six columns">
            <h6 className={`${styles.formLabel}`}>Exp. Date (MM/YY)</h6>
          </label>
          <label htmlFor="cvc" className="six columns">
            <h6 className={`${styles.formLabel}`}>CVC</h6>
          </label>
          <div className={`${styles.inputGroup} twelve columns`}>
            <div className={`three columns`}>
              <Controller
                name="expirationDate.month"
                control={control}
                render={({ field }) => <Input {...field} errors={errors} />}
              />
            </div>
            <div className={`three columns`}>
              <Controller
                name="expirationDate.year"
                control={control}
                render={({ field }) => <Input {...field} errors={errors} />}
              />
            </div>
            <div className="six columns">
              <Controller
                name="cvc"
                control={control}
                render={({ field }) => <Input {...field} errors={errors} />}
              />
            </div>
          </div>
          <div className="six columns">
            {errors.expirationDate &&
              formatExpirationDateErrors(errors.expirationDate)}
          </div>
          <div className="six columns">Cannot be blank.</div>
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
