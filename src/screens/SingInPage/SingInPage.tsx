import React, { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SingInForm from "../../components/SingInForm";
import { authAPI } from "../../store/api/authApi";
import { ISignInForm } from "../../types/user";

type Props = {};

const SingInPage = (props: Props) => {
  // 👇 API SingIn Mutation
  const [
    userLogin,
    {
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: loginError,
      isSuccess: isLoginSuccess,
    },
  ] = authAPI.useUserLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || "/";

  const onSubmitHandler: SubmitHandler<ISignInForm> = (values) => {
    console.log("LOGIN PAGE >>> ", values);
    userLogin(values);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // toast.success("You successfully logged in");
      console.log("You successfully logged in");
      navigate(from);
    }
    if (isLoginError) {
      if (Array.isArray((loginError as any).data.error)) {
        (loginError as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((loginError as any).data.message, {
          position: "top-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoginLoading]);

  return (
    <>
      <SingInForm onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default SingInPage;
