import React, { useState } from "react";
import {
  ControllerProps,
  ControllerRenderProps,
  FieldErrorsImpl,
} from "react-hook-form";
import { FormData } from "./Form";

import styles from "styles/pages/CCForm/CCForm.module.scss";
import { ErrorMessage } from "@hookform/error-message";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ControllerRenderProps & {
    errors: FieldErrorsImpl;
  };

const Input: React.FC<InputProps> = ({ errors, ...field }: InputProps) => {
  const [activeElement, setActiveElement] = useState<Element | null>(null);
  const [showError, setShowError] = useState<boolean>(
    (Object.keys(errors).includes("expirationDate") &&
      field.name === "expirationDate.month") ||
      (Object.keys(errors).includes("expirationDate") &&
        field.name === "expirationDate.year")

    //   Object.keys(errors).includes(field.name)
  );
  // console.log(rest)

  const onFocus = (e: React.FocusEvent) => {
    setActiveElement(e.target);
  };
  const onBlur = (e: React.FocusEvent) => {
    setActiveElement(null);
  };

  return (
    <>
      <div
        className={`
            ${styles.formInputWrapper}
            ${
              activeElement?.id === field.name && styles.formInputWrapperFocused
            } 
            ${showError && styles.formInputWrapperError}
        `}
      >
        {showError.toString()}
        <input
          {...field}
          className={`${styles.formInput} u-full-width`}
          onFocus={(e) => {
            onFocus(e);
          }}
          onBlur={(e) => {
            onBlur(e);
            field.onBlur();
          }}
          onChange={field.onChange}
          id={field.name}
          placeholder={"MM"}
          ref={field.ref}
        />
      </div>
    </>
  );
};
//   return (
// <div
//   className={`
//         ${styles.formInputWrapper}
//         ${
//           activeElement?.id === inputProps.name &&
//           styles.formInputWrapperFocused
//         }
//         `}
// >
//   <input
// value={value}
// {...field}
// className={`${styles.formInput} u-full-width`}
// onFocus={(e) => {
//   onFocus(e);
// }}
// onBlur={(e) => {
//   onBlur(e);
//   field.onBlur();
// }}
//     id={inputProps.name}
//     placeholder={inputProps.placeholder}
//   />
// </div>
//   );
// };

export default Input;
