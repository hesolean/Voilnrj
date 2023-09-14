import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "../formik/TextError";

const initialValues = {
  profilName: "",
  foreName: "",
  profilEmail: "",
  phoneNumbers: [""],
  profilPassword: "",
};

const savedValues = {
  profilName: "Jackson",
  foreName: "Mickael",
  profilEmail: "michael.jackson@hollywoood.com",
  phoneNumbers: ["0123456789"],
  profilPassword: "KingOfPop-01",
};
const onSubmit = async (values, onSubmitProps) => {
  console.log("first");
  try {
    console.log("Form data : ", values);
    console.log("submit props : ", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
  }
};
const validationSchema = Yup.object({
  profilName: Yup.string().required("Requis"),
  foreName: Yup.string().required("Requis"),
  profilEmail: Yup.string().email("Format email invalide").required("Requis"),
  phoneNumbers: Yup.array()
    .of(Yup.string().matches(/^\d{10}$/))
    .required("Requis"),
  profilPassword: Yup.string().required("Requis"),
});

function Profil() {
  const [formValues, setFormValues] = useState(null);
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
          //il test formValues. Si absent, il prend initialValues. L'inverse ne fonctionne pas
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          //on autorise à utiliser les savedValues
          enableReinitialize
          //on empêche la vérification de yup au changement et au blur
          validateOnChange={false}
          validateOnBlur={false}
        >
          {/* on donne accès à toutes les méthodes qui sont liées au formulaire */}
          {(formik) => {
            console.log("formik : ", formik);
            return (
              <div className="flex justify-center items-center">
                <Form className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="identifiant" className="text-2xl mr-3">
                    Nom
                  </label>
                  <Field
                    type="text"
                    id="profilName"
                    name="profilName"
                    placeholder="Entrez votre nom"
                    className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                  />
                  <ErrorMessage name="name" component={TextError} />

                  <label htmlFor="foreName" className="text-2xl my-3 mr-3 ml-6">
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

                  <label
                    htmlFor="profilEmail"
                    className="text-2xl my-3 mr-3 ml-6"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    id="profilEmail"
                    name="profilEmail"
                    placeholder="Entrez votre email"
                    className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                  />
                  <ErrorMessage name="profilEmail" component={TextError} />

                  <div className="mt-10">
                    <label htmlFor="phone" className="text-2xl mb-3 mt-8 mr-3">
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

                  <label
                    htmlFor="profilPassword"
                    className="text-2xl my-3 mr-3 ml-6"
                  >
                    Mot de passe
                  </label>
                  <Field
                    type="text"
                    id="profilPassword"
                    name="profilPassword"
                    placeholder="Entrez votre mot de passe"
                    className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                  />
                  <ErrorMessage name="profilPassword" component={TextError} />

                  <div className="flex flex-row justify-between w-full">
                    <button
                      type="button"
                      onClick={() => setFormValues(savedValues)}
                      className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                      Recharger le formulaire
                    </button>
                    <button
                      type="reset"
                      className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                      Réinitialiser
                    </button>
                    <button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                      className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                      Valider
                    </button>
                  </div>
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
