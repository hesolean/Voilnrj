import * as Yup from "yup";

export const validationSchema = Yup.object({
    profilName: Yup.string().required("Requis"),
    foreName: Yup.string().required("Requis"),
    profilEmail: Yup.string().email("Format email invalide").required("Requis"),
    phoneNumbers: Yup.array()
      .of(Yup.string().matches(/^\d{10}$/))
      .required("Requis"),
    profilPassword: Yup.string().required("Requis"),
  });