import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import  { FC, ReactNode, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SingInForm from "../../components/SingInForm";
import { authAPI } from "../../store/api/authAPI";
import { ISignInForm } from "../../types/user";

const SingInPage: FC<ReactNode> = (props) => {
  // 👇 API SingIn Mutation
  const [
    userLogin,
    {
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: loginError,
      isSuccess: isLoginSuccess,
      data:loginData
    },
  ] = authAPI.useUserLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || "/";

  const onSubmitFormHandler: SubmitHandler<ISignInForm> = (values) => {
    userLogin(values);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("You successfully logged in");
      navigate(from);
    }
    if (isLoginError) {
      console.log("loginError: ", (loginError as any).data?.errors);
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
      <SingInForm
        onSubmitHandler={onSubmitFormHandler}
        fetchError={loginError as FetchBaseQueryError}
      />
    </>
  );
};

export default SingInPage;
