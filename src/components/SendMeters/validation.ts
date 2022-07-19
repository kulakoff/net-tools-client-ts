import * as yup from "yup";

const schema = yup.object().shape({
  serialNember: yup.string().required(),
  reportDate: yup.date().required(),
  metersCount: yup.string().min(6, "Миниму 6 символов").max(8, "Максимум 8 символов").required("Это поле обязательно для заполнения"),
  // metersCount2: yup.string().min(6, "Миниму 6 символов").max(8, "Максимум 8 символов").required("Это поле обязательно для заполнения")
});

export default schema;