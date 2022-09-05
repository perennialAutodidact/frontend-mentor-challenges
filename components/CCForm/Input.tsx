import React, { useState } from "react";
import {
  useController,
  UseControllerProps,
  FieldErrorsImpl,
} from "react-hook-form";
import { FormData } from "./Form";
import styles from "styles/pages/CCForm/CCForm.module.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  UseControllerProps<FormData>;

//  & {
//     classnames: string;
// }

const Input: React.FC<InputProps> = (inputProps: InputProps) => {
  const { field: {value, ...field}, ...rest } = useController(inputProps);
  const [activeElement, setActiveElement] = useState<Element | null>(null);

  // console.log(rest)

  const onFocus = (e: React.FocusEvent) => {
    setActiveElement(e.target);
  };
  const onBlur = (e: React.FocusEvent) => {
    setActiveElement(null);
  };

  return (
    // <div
    //   className={`
    //         ${styles.formInputWrapper}
    //         ${
    //           activeElement?.id === inputProps.name &&
    //           styles.formInputWrapperFocused
    //         } 
    //         `}
    // >
      <input
        value={value}
        {...field}
        className={`${styles.formInput} u-full-width`}
        // onFocus={(e) => {
        //   onFocus(e);
        // }}
        // onBlur={(e) => {
        //   onBlur(e);
        //   field.onBlur();
        // }}
        id={inputProps.name}
        placeholder={inputProps.placeholder}
      />
    // </div>
  );
};

export default Input;
