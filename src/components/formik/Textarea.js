import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col my-3">
      <label htmlFor={name} className="text-2xl mr-3">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
