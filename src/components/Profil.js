import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  foreName: "",
  adress: {
    number: "",
    street: "",
    zipCode: "",
    town: "",
  },
  phoneNumbers: [""],
};
const onSubmit = async (values, onSubmitProps) => {
    console.log('first')
    try {
      console.log('Form data : ', values);
      console.log('submit props : ', onSubmitProps);
    onSubmitProps.setSubmitting(false)
}catch (error) {
    console.error('Erreur lors de la soumission : ', error);
  }
};
const validationSchema = Yup.object({
    name: Yup.string().required("Requis"),
    foreName: Yup.string().required("Requis"),
    // adress: {
    //   number: Yup.number().required("Requis"),
    //   street: Yup.string().required("Requis"),
    //   zipCode: Yup.number().required("Requis"),
    //   town: Yup.string().required("Requis"),
    // },
    phoneNumbers: Yup.array().of(Yup.string().matches(/^\d{10}$/)).required("Requis"),
  });
  

function Profil() {
  return (
    <div
      name="profil"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Profil
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          //on empêche la vérification de yup au changement et au blur
          validateOnChange={false}
          validateOnBlur={false}
        >
          {/* on donne accès à toutes les méthodes qui sont liées au formulaire */}
          {formik => {
            console.log('formik : ',formik)
            return (
              <div className="flex justify-center items-center">
                <Form className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="identifiant" className="text-2xl">
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

                  <label htmlFor="foreName" className="text-2xl mb-3 mt-2 mr-3">
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

                  <label htmlFor="adress" className="text-2xl mb-3 mt-2 mr-3">
                    Adresse
                  </label>
                  <Field
                    type="number"
                    id="number"
                    name="adress.number"
                    className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                  />
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

                  <div>
                    <label htmlFor="phone" className="text-2xl mb-3 mt-2 mr-3">
                      Téléphone
                    </label>
                    <FieldArray
                      name="phoneNumbers"
                      className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                    >
                      {(fieldArrayProps) => {
                        //on extrait les information que l'on veut des méthodes
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { phoneNumbers } = values;
                        return (
                          <div>
                            {phoneNumbers.map((phoneNumber, index) => (
                              <div key={index} className="flex flex-row m-1">
                                <Field
                                  className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                                  name={`phoneNumbers[${index}]`}
                                />
                                <button
                                  className="px-3 py-1 ml-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                                  type="button"
                                  onClick={() => push("")}
                                >
                                  {""}+{""}
                                </button>
                                {/* on empêche de clicker sur - s'il n'y a plus qu'un champ */}
                                {index > 0 && (
                                  <button
                                    type="button"
                                    className="px-3 py-1 ml-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                                    onClick={() => remove(index)}
                                  >
                                    {""}-{""}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
                  </div>
                  <button
                    type="submit"
                    disabled={!(formik.isValid) || formik.isSubmitting}
                    className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                  >
                    Valider
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Profil;
