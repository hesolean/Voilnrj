import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextError from "../formik/TextError";
import { validationSchema } from "../services/ValidationSchemas";
import axios from "axios";
import FormikControl from "../formik/FormikControl";

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
  const [profils, setProfils] = useState({});
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/profils`)
      .then((res) => {
        setProfils(res);
        console.log("profil : ", profils);
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
            Profil
            {/* {`${profils.data[0].foreName}`} */}
          </p>
          <p></p>
        </div>
        <Formik
          //il test formValues. Si absent, il prend initialValues. L'inverse ne fonctionne pas
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {/* on donne accès à toutes les méthodes qui sont liées au formulaire */}
          {(formik) => {
            console.log("formik : ", formik);
            return (
              <div className="flex justify-center items-center">
                <Form className="flex flex-col w-full md:w-1/2">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Nom"
                    name="profilName"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    label="Prénom"
                    name="foreName"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    label="Email"
                    name="profilEmail"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    label="Téléphone"
                    name="phoneNumbers"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    label="Mot de passe"
                    name="profilPassword"
                  />

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
