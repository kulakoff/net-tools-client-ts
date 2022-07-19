import * as yup from "yup";
import "yup-phone-lite";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Минимум 3 символа")
    .max(15, "Максимум 15 символов")
    .required(),
  lastName: yup
    .string()
    .min(3, "Минимум 3 символа")
    .max(15, "Максимум 15 символов")
    .required(),
  email: yup
    .string()
    .email("Укажите правильно email: example@mail.com")
    .required(),
  phoneNumber: yup
    .string()
    .phone("RU", "Укажите правильно номер телефона: '915XXXXXXX'")
    .required("Укажите номер телефона"),
  password: yup.string().min(6).required(),
});

export default schema;
