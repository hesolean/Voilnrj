import React from "react";
import { Field, ErrorMessage } from "formik";

//composants
import TextError from "./TextError";

//il faut considérer qu'il s'agit d'un tableau de valeur pour son installation dans le composant final
// dans initialValues : checkboxOption: []
// dans validationSchema : checkboxOption: Yup.array().required('Requis')
//<FormikControl control='checkbox' label='Checkbox topic' name='checkboxOption' options={checkboxOptions}/>

function CheckBox(props) {
  //constantes pour définir une checkbox
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
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
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

export default CheckBox;
