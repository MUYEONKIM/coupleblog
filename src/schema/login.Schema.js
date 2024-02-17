import * as yup from "yup"

export const Loginschema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
})