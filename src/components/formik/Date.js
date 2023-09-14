import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

// dans initialValues : date: null
// dans validationSchema : date: Yup.date().required('Requis').nullable()
//<FormikControl control='date' label='Date' name='date' />

function Date(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col my">
      <label htmlFor={name} className="text-2xl mr-3">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
      >
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Date;
