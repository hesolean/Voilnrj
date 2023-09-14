import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import { registration } from ".../datas/registration";

const initialValues = {
  registrationEmail: "",
  registrationPassword: "",
  confirmPassword: "",
  modeOfContact: "",
  phone: "",
};

const onSubmit = (values) => {
  console.log("Registration : ", values);
};

const validationSchema = Yup.object({
  registrationEmail: Yup.string()
    .email("Format email invalide")
    .required("Requis"),
  registrationPassword: Yup.string().required("Requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Le mot de passe ne correspond pas")
    .required("Requis"),
  modeOfContact: Yup.string().required("Requis"),
  phone: Yup.string().when("modeOfContact", {
    is: "phonemoc",
    then: Yup.string().required("Requis"),
  }),
});

function RegistrationForm() {
  return (
    <div
      name="login"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Identification
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="registrationEmail"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Mot de passe"
                  name="registrationPassword"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirmation du mot de passe"
                  name="confirmPassworg"
                />
                <FormikControl
                  control="radio"
                  label="Mode de contact"
                  name="modeOfContact"
                  options={registration}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Téléphone"
                  name="phone"
                />

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                >
                  Valider
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;
