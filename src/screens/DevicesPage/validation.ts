import * as yup from "yup";

const schema = yup.object().shape({
  value: yup.string().length(17,"Укажите верно MAC : AA:BB:CC:DD:EE:FF")
  .matches(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)
  .uppercase()
  .required("Это обязательное поле"),
  // serialNumber: yup.string().min(15).max(30).required(),
});

export default schema;
