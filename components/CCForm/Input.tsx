import React, { useState } from 'react'
import { useController, UseControllerProps, FieldErrorsImpl } from 'react-hook-form';
import { FormData } from './Form';
import styles from 'styles/pages/CCForm/CCForm.module.scss'

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    classnames: string;
    errors: FieldErrorsImpl<FormData>
}

const Input = (props: UseControllerProps<FormData> & InputProps) => {
    const { field, ...rest } = useController(props)
    const [activeElement, setActiveElement] = useState<Element | null>(null)

    console.log(rest)

    const onFocus = (e: React.FocusEvent) => {
        setActiveElement(e.target)
    }
    const onBlur = (e: React.FocusEvent) => {
        setActiveElement(null)
    }

    return (
        <div className={`
            ${styles.formInputWrapper}
            ${activeElement?.id === props.name && styles.formInputWrapperFocused} 
            ${props.classnames}
            `}
        >
            <input
                {...field}
                className={`${styles.formInput} u-full-width`}
                onFocus={e => {
                    onFocus(e)
                }}
                onBlur={(e) => {
                    onBlur(e);
                    field.onBlur()
                }}
                id={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input