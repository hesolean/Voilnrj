import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";
import FormikControl from "../formElements/FormikControl";

import axios from "axios";

import { profilValidationSchema } from "../services/ValidationSchemas";

let initialValues = {
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
    axios.post(`http://localhost:8080/profils`, values).then((res) => {
      console.log(res);
    });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
  }
};

function Profil() {
  // const [index, setIndex] = useState("");
  const [profils, setProfils] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/profils`)
      .then((res) => {
        setProfils(res.data);
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
        <div className="pb-2 flex flex-row justify-around">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Profil
          </p>
          {/* <div>
            <label>Donnez l'indice : </label>
            <input
              type="number"
              name="index"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
            <button type="submit" onClick={handleClick}>
              Valider
            </button>
          </div> */}

          {/* affichage de la liste des profils récupérés dans le get mais bug une fois sur 2 !!!!*/}
          <ul>
            {profils.map((item) => (
              <li key={item.id}>
                {" "}
                {item.profilName ? `${item.profilName}` : ""}{" "}
              </li>
            ))}
          </ul>
          
        </div>
        <Formik
          //il teste formValues. Si absent, il prend initialValues. L'inverse ne fonctionne pas
          initialValues={initialValues}
          validationSchema={profilValidationSchema}
          onSubmit={onSubmit}
        >
          {/* on donne accès à toutes les méthodes qui sont liées au formulaire */}
          {(formik) => {
            // console.log("formik : ", formik);
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
