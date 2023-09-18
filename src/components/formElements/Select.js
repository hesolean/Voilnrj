import React from "react";
import { Field, ErrorMessage } from "formik";

//composants
import TextError from "./TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col my-3">
      <label htmlFor={name} className="text-2xl mr-3">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
      >
        {options.map(option => {
            return(
                <option key={option.value} value={option.value}>
                    {option.value}
                </option>
            )
        } )}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
