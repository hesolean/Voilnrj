import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  category: "",
  price: 0,
  cover: "",
  amount: 0,
};

const onSubmit = (values) => {};

const validationSchema = Yup.object({
  name: Yup.string().required("Requis"),
  category: Yup.string().required("Requis"),
  price: Yup.number().required("Requis"),
  cover: Yup.string().notRequired(),
  amount: Yup.number().notRequired(),
});

// début du composant
const NewWind = () => {
  return (
    <div
      name="newWind"
      className="w-full bg-gradient-to-b from-lightblue to-darkblue text-dark md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl front-bold inline border-b-4 border-black">
            Nouveau produit
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="flex justify-center items-center mt-10">
            <Form className="flex flex-wrap w-full md:w-1/2">
              <div className="m-2 p-2">
                <label htmlFor="identifiant" className="text-3xl m-3">
                  Nom
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Entrez le nom du produit"
                  className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                />
                <ErrorMessage name="name" />
              </div>

              <div className="m-2 p-2">
                <label htmlFor="category" className="text-3xl mb-3 mt-8 mr-3">
                  Catégorie
                </label>
                <Field
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Entrez la catégorie"
                  className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                />
                <ErrorMessage name="category" />
              </div>

              <div className="m-2 p-2">
                <label htmlFor="price" className="text-3xl mb-3 mt-8 mr-3">
                  Prix
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Entrez le prix"
                  className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                />
                <ErrorMessage name="price" />
              </div>

              <div className="m-2 p-2">
                <label htmlFor="cover" className="text-3xl mb-3 mt-8 mr-3">
                  Image
                </label>
                <Field
                  type="file"
                  id="cover"
                  name="cover"
                  placeholder="Choisissez l'image"
                  className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
                />
                <ErrorMessage name="cover" />
              </div>

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
};

export default NewWind;
