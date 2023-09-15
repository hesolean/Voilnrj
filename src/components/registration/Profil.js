import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextError from "../formik/TextError";
import { validationSchema } from "../services/ValidationSchemas";
import axios from "axios";

const initialValues = {
  profilName: "",
  foreName: "",
  profilEmail: "",
  phoneNumbers: [""],
  profilPassword: "",
};

const onSubmit = async (values, onSubmitProps) => {
  try {
    console.log("Form data : ", values);
    console.log("submit props : ", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
  }
};

function Profil() {
  const [profils, setProfils] = useState({})
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/profils`)
      .then((res) => {
        setProfils(res)
        console.log("profil : ", profils)
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div
      name="profil"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Profil {`${profils.data[0].foreName}`}
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

                  <label htmlFor="foreName" className="text-2xl my-3">
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

                  <label htmlFor="profilEmail" className="text-2xl my-3">
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

                  <label htmlFor="phone" className="text-2xl my-3">
                    Téléphone
                  </label>
                  <Field
                    type="text"
                    id="phoneNumbers"
                    name="phoneNumbers"
                    placeholder="Entrez votre mot de passe"
                    className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                  />
                  <ErrorMessage name="phoneNumbers" component={TextError} />

                  <label htmlFor="profilPassword" className="text-2xl my-3">
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
