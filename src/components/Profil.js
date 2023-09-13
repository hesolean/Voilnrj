import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  foreName: "",
  adress: {
    number: 0,
    street: "",
    zipCode: 0,
    town: "",
  },
};
const onSubmit = (values) => {};
const validationSchema = Yup.object({
  name: Yup.string().required("Requis"),
  foreName: Yup.string().required("Requis"),
  adress: {
    number: Yup.number().notRequired(),
    street: Yup.string().notRequired(),
    zipCode: Yup.number().notRequired(),
    town: Yup.string().required("Requis"),
  },
});

function Profil() {
  return (
    <div
      name="profil"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Profil
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="flex justify-center items-center mt-10">
            <Form className="flex flex-col w-full md:w-1/2">
              <label htmlFor="identifiant" className="text-3xl m-3">
                Nom
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="name" component={TextError} />

              <label htmlFor="foreName" className="text-3xl mb-3 mt-8 mr-3">
                Prénom
              </label>
              <Field
                type="text"
                id="foreName"
                name="foreName"
                placeholder="Entrez votre prénom"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="foreName" component={TextError} />

              <label htmlFor="adress" className="text-3xl mb-3 mt-8 mr-3">
                Adresse
              </label>
              <Field
                type="number"
                id="number"
                name="adress.number"
                placeholder="Entrez le numéro"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="number" component={TextError} />
              <Field
                type="text"
                id="street"
                name="adress.street"
                placeholder="Entrez le nom de la voie"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="street" component={TextError} />
              <Field
                type="number"
                id="zipCode"
                name="adress.zipCode"
                placeholder="Entrez le code postal"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="number" component={TextError} />
              <Field
                type="text"
                id="town"
                name="adress.town"
                placeholder="Entrez la ville"
                className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              />
              <ErrorMessage name="town" component={TextError} />

              <button
                type="submit"
                className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
              >
                Valider
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
}

export default Profil;
