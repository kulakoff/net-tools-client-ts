import * as yup from "yup";

const schema = yup.object().shape({
  value: yup.string().length(17,"Укажите верно MAC : AA:BB:CC:DD:EE:FF. Не более 17 символов")
  .matches(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, "Укажите верно MAC : AA:BB:CC:DD:EE:FF")
  .uppercase()
  .required(),
  // serialNumber: yup.string().min(15).max(30).required(),
});

export default schema;
