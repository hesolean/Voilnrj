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
    windDescription: Yup.string().required("Requis"),
    windCategory: Yup.string().required("Requis"),
    windPrice: Yup.number().required("Requis")
  });