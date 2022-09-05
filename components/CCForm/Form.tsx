import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import styles from "styles/pages/CCForm/CCForm.module.scss";
import Input from "./Input";
import { ErrorMessage } from "@hookform/error-message";

export type FormData = {
//   cardholderName: string;
//   ccNumber: string;
  expirationDate: {
    month: string;
    year: string;
  };
//   cvc: string;
};

const defaultValues: FormData = {
//   cardholderName: "",
//   ccNumber: "",
  expirationDate: {
    month: "",
    year: "",
  },
//   cvc: "",
};

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: FormData) => {
    console.log("BLAHBLAHBLAH");
    console.log(data);
    console.log({ errors });
  };
  const onError = (errors: FieldErrors) => {
    // console.log(errors)
  };

  // const { activeElement, listenersReady } = useActiveElement()
  // if (!listenersReady) {
  //     return <></>
  // }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          <label htmlFor="expireMonth" className="twelve columns">
            <h6 className={`${styles.formLabel}`}>Exp. Date (MM/YY)</h6>
          </label>
          <div className={`six columns`}>
            <Input
              name="expirationDate.month"
              // classnames="six columns"
              placeholder="MM"
            />
            <Input
              name="expirationDate.year"
              placeholder="YY"
              // classnames="six columns"
            />
            {/* <ErrorMessage
              name={"expireDate"}
              errors={errors}
              render={({ message }) => (
                <div className="twelve columns">{message}</div>
              )}
            /> */}
          </div>
        </div>
        {/* <div className="six columns">
                    <label htmlFor="cvc" className="twelve columns">
                        <h6 className={`${styles.formLabel}`}>CVC</h6>

                    </label>
                    <Input
                        name='cvc'
                        // classnames="twelve columns"
                        placeholder="e.g. 123"
                    />
                </div> */}
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
