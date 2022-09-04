import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import styles from "styles/pages/CCForm/CCForm.module.scss";
import Input from './Input'
import { ErrorMessage } from '@hookform/error-message'

export interface FormData {
    cardholderName: string;
    ccNumber: string;
    expireDate: {
        month: string;
        year: string;
    }
    cvc: string;
}


const defaultValues: FormData = {
    cardholderName: '',
    ccNumber: '',
    expireDate: {
        month: '',
        year: '',
    },
    cvc: ''
}

const Form: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues
    });

    const onSubmit = (data: FormData) => {
        console.log("BLAHBLAHBLAH")
        console.log(data);
        console.log({ errors })
    };
    const onError = (errors: FieldErrors) => {
        // console.log(errors)
    }

    // const { activeElement, listenersReady } = useActiveElement()
    // if (!listenersReady) {
    //     return <></>
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} container`}>

            <div className="row">

                <label htmlFor="cardholderName">
                    <h6 className={`${styles.formLabel}`}>CARDHOLDER NAME</h6>
                </label>
                <Input
                    placeholder="e.g. Manish Patel"
                    classnames="twelve columns"
                    name='cardholderName'
                    control={control}
                    errors={errors}
                />
                <label htmlFor="ccNumber">
                    <h6 className={`${styles.formLabel}`}>CARD NUMBER</h6>
                </label>

                <Input
                    name='ccNumber'
                    control={control}
                    classnames="twelve columns"
                    placeholder="e.g. 1234 5678 9123 0000"
                    errors={errors}
                />

            </div>
            <div className="row">
                <div className="twelve columns">

                    <label htmlFor="expireMonth" className="twelve columns">
                        <h6 className={`${styles.formLabel}`}>Exp. Date (MM/YY)</h6>
                    </label>
                    <div className={`six columns`}>
                        <Input
                            control={control}
                            name="expireDate.month"
                            classnames="six columns"
                            placeholder="MM"
                            errors={errors}
                        />
                        <Input
                            name="expireDate.year"
                            control={control}
                            placeholder="YY"
                            classnames="six columns"
                            errors={errors}
                        />
                        <ErrorMessage name={"expireDate"} errors={errors} render={({ message }) => (
                            <div className='twelve columns'>{message}</div>
                        )} />
                    </div>
                </div>
                <div className="six columns">
                    <label htmlFor="cvc" className="twelve columns">
                        <h6 className={`${styles.formLabel}`}>CVC</h6>

                    </label>
                    <Input
                        name='cvc'
                        control={control}
                        classnames="twelve columns"
                        placeholder="e.g. 123"
                        errors={errors}
                    />
                </div>
            </div>
            <button type="submit" className={`${styles.formButton} twelve columns`}>Confirm</button>
        </form>
    );

};

export default Form;
