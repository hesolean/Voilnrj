import React from "react";
import { Field, ErrorMessage } from "formik";

//composants
import TextError from "./TextError";

//<FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOptions}/>
//les options ont le même format que select

function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col my-3">
      <label htmlFor={name} className="text-2xl mr-3">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
      >
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
