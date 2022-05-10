import React from 'react';
import { Field } from 'formik';

export default function TextInput({label, ...props}: React.HTMLProps<HTMLInputElement> & {label: string}) {
    return <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <Field className="input input-bordered w-full max-w-xs" {...props}/>
    </div>
}