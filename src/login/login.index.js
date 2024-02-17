import * as L from "./login.styles";
import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function Login() {
  const schema = object({
    email: string().required("이메일을 입력해주세요"),
    password: string().required("비밀번호를 입력해주세요."),
  });

  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const valid = (data) => {
    if (data.email !== 'yhr2597' | data.password !== 'ROrlfma2914!') {
      Modal.error({ content: "로그인 정보가 다릅니다" })
      return
    }
    router.push("/profile")
  }

  return (
    <L.LoginWrapper onSubmit={handleSubmit(valid)}>
      <L.LeftWrapper>
        <L.LeftContents>
          <L.Title>Sign In</L.Title>
          <L.InputP>
            로그인 정보를 입력해주세요
          </L.InputP>
          <L.InputWrapper>
            <L.Idbox type="text" {...register("email")} placeholder="Email" />
            <L.ErrorMessage>{formState.errors.email?.message}</L.ErrorMessage>
          </L.InputWrapper>
          <L.InputWrapper>
            <L.Idbox
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <L.ErrorMessage>
              {formState.errors.password?.message}
            </L.ErrorMessage>
          </L.InputWrapper>
          <L.LoginButton>로그인</L.LoginButton>
        </L.LeftContents>
      </L.LeftWrapper>
    </L.LoginWrapper>
  )
}
