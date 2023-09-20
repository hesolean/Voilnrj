import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import FormikControl from "../formElements/FormikControl";
import Loader from "../Loader";

import { categoryList } from "../../datas/categoryList";
import { coverList } from "../../datas/coverList";

import { newWindValidationSchema } from "../services/ValidationSchemas";

const handleSubmit = async (values, onSubmitProps) => {
  try {
    console.log("Form data : ", values);
    console.log("submit props : ", onSubmitProps);
    axios.put(`http://localhost:8080/winds`, values).then((res) => {
      console.log(res);
    });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
  }
};

function UpdateWind(id) {
  const [updatedWind, setUpdatedWind] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // console.log(id)
    // console.log("url",`http://localhost:8080/winds/${id.id}` )
    axios
      .get(`http://localhost:8080/winds/${id.id}`)
      .then((res) => {
        setUpdatedWind(res.data);
        console.log("updatedWind ", updatedWind);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div name="newWind" className=" bg-darkblue text-dark">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Nouveau produit
          </p>
        </div>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <Formik
              initialValues={updatedWind}
              // validationSchema={newWindValidationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <div className="flex justify-center items-center">
                  <Form className="flex flex-col w-full md:w-1/2">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Nom"
                      name="windName"
                    />

                    <FormikControl
                      control="textarea"
                      label="Description"
                      name="windDescription"
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
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateWind;
