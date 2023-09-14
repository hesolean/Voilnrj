import React from "react";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("Requis"),
    password: Yup.string().required("Requis"),
  });

  const onSubmit = (values) => {
    console.log("LoginForm : ", values);
  };

  return (
    <div
      name="login"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Connexion
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
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Mot de passe"
                  name="password"
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

export default Login;
