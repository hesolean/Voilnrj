import * as Yup from "yup";

export const profilValidationSchema = Yup.object({
    profilName: Yup.string().required("Requis"),
    foreName: Yup.string().required("Requis"),
    profilEmail: Yup.string().email("Format email invalide").required("Requis"),
    phoneNumbers: Yup.string().matches(/^\d{10}$/)
      .required("Requis"),
    profilPassword: Yup.string().required("Requis"),
  });

  export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("Requis"),
    password: Yup.string().required("Requis"),
  });

  export const newWindValidationSchema = Yup.object({
    windName: Yup.string().required("Requis"),
    description: Yup.string().required("Requis"),
    category: Yup.string().required("Requis"),
    price: Yup.number().required("Requis"),
    // cover: Yup.string().notRequired(),
    // amount: Yup.number().notRequired(),
  });