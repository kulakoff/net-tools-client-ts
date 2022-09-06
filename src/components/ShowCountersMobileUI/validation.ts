import * as yup from "yup";

const schema = yup.object().shape({
  metersDate: yup.date().required(),
});

export default schema;