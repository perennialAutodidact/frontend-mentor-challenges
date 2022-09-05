import React, { useCallback, useEffect, useState } from "react";
import { ControllerRenderProps, FieldErrorsImpl } from "react-hook-form";

import styles from "styles/pages/CCForm/CCForm.module.scss";

type AdditionalProps = {
  errors: FieldErrorsImpl;
  activeElement: Element | null;
  onFocus: React.FocusEventHandler;
  onBlur: React.FocusEventHandler;
  placeholder: string;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ControllerRenderProps &
  AdditionalProps;

// const formatCardNumber = (string:string) => {
//   let cardNumber = ''
//   for(let i=0; i<string.length-1; i++){
//     if(i % 4 === 0 && i > 0){
//       cardNumber+=' '
//     }
//     else {
//       cardNumber += string[i]
//     }
//   }
//   if(!cardNumber)
//   return cardNumber
// }

const formatCardNumber = (string: string) =>
  string
    .replace(/\W/g, "")
    .split("")
    .map((v, i) => (i > 0 && i % 4 === 0 ? " " + v : v))
    .join("");

const Input: React.FC<InputProps> = ({
  errors,
  activeElement,
  onFocus,
  onBlur,
  placeholder,
  ...field
}: InputProps) => {
  const shouldShowError = useCallback(
    (errors: FieldErrorsImpl, fieldName: string) =>
      (errors?.expirationDate &&
        "month" in errors?.expirationDate &&
        fieldName === "expirationDate.month") ||
      (errors?.expirationDate &&
        "year" in errors?.expirationDate &&
        fieldName === "expirationDate.year") ||
      (fieldName !== "expirationDate.month" &&
        fieldName !== "expirationDate.year" &&
        Object.keys(errors).includes(fieldName)),
    []
  );

  const [showError, setShowError] = useState<boolean>(
    shouldShowError(errors, field.name)
  );

  useEffect(() => {
    setShowError(shouldShowError(errors, field.name));
  }, [errors, field, shouldShowError]);

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
        <input
          {...field}
          className={`${styles.formInput} u-full-width`}
          onFocus={onFocus}
          onBlur={(e) => {
            field.name === "ccNumber" &&
              field.onChange(formatCardNumber(e.target.value));
            onBlur(e);
          }}
          onChange={field.onChange}
          id={field.name}
          placeholder={placeholder}
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
