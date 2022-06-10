import * as yup from "yup";

const schema = yup.object().shape({
    demo_date: yup.date().required()
});

export default schema;