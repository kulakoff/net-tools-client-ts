import * as yup from "yup";

const schema = yup.object().shape({
  value: yup.string().min(17).max(17).required(),
  // serialNumber: yup.string().min(15).max(30).required(),
});

export default schema;
