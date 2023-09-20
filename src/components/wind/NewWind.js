import React from "react";
import { Formik, Form } from "formik";
import axios from 'axios'

import FormikControl from "../formElements/FormikControl";

import { categoryList } from "../../datas/categoryList";
import { coverList } from "../../datas/coverList";

import { newWindValidationSchema } from "../services/ValidationSchemas";


const initialValues = {
  windName: "",
  windDescription: "",
  windCategory: "",
  windPrice: "",
  windCover: "",
  windAmount: 0,
};

const handleSubmit = async (values, onSubmitProps) => {
  try {
    console.log("Form data : ", values);
    console.log("submit props : ", onSubmitProps);
    axios.post(`http://localhost:8080/winds`, values).then((res) => {
      console.log(res);
    });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
  }
};

// début du composant
const NewWind = () => {
  return (
    <div
      name="newWind"
      className="w-full bg-gradient-to-b from-darkblue to-lightblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Nouveau produit
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          // validationSchema={newWindValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <div className="flex justify-center items-center">
              <Form className="flex flex-col w-full md:w-1/2">
                <FormikControl
                  control="input"
                  type="text"
                  label="Nom du produit"
                  name="windName"
                />

                <FormikControl
                  control="textarea"
                  label="Description"
                  name="description"
                />

                <FormikControl
                  control="select"
                  label="Catégorie"
                  name="windCategory"
                  options={categoryList}
                />

                <FormikControl
                  control="input"
                  type="number"
                  label="Prix"
                  name="windPrice"
                />
                
                <FormikControl
                  control="select"
                  label="Image"
                  name="windCover"
                  options={coverList}
                />

                <button
                  type="submit"
                  className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                >
                  Valider
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewWind;
