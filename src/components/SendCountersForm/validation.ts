import * as yup from "yup";

const schema = yup.object().shape({
  serial_number: yup.string().required(),
  timestamp: yup.date().required(),
  value: yup.string().min(1, "Минимум 1 символ").max(8, "Максимум 8 символов").required("Это поле обязательно для заполнения"),
  // metersCount2: yup.string().min(6, "Миниму 6 символов").max(8, "Максимум 8 символов").required("Это поле обязательно для заполнения")
});

export default schema;