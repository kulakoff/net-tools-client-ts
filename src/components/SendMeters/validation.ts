import * as yup from "yup";

const schema = yup.object().shape({
  metersCount: yup.number().required(),
});

export default schema;