import { ErrorType } from "./error";

export interface IUser {
  email: string;
  isActivated: boolean;
  id: string;
  role: string[];
}

export interface IAuthResponse {
  deviceId: string;
  accessToken: string;
  sub: string;
}
export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: null | ErrorType;
}

/**
 * Данные от формы авторизации
 */
export interface ISignInForm {
  email: string;
  password: string;
}

/**
 * Данные от формы регистрации
 */
export interface ISignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
////////
export enum UserActionTypes {
  USER_SIGNIN = "USER_SIGNIN",
  USER_SIGNUP = "USER_SIGNUP",
  FETCHING_USER = "FETCHING_USER",
  FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS",
  FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE",
  FETCHING_TOKEN = "FETCHING_TOKEN",
  FETCHING_TOKEN_SUCCESS = "FETCHING_TOKEN_SUCCESS",
  FETCHING_TOKEN_FAILURE = "FETCHING_TOKEN_FAILURE",
  USER_AUTH = "USER_AUTH",
  USER_UNAUTH = "USER_UNAUTH",
}

/**Форма авторизации */
export interface IUserSignInAction {
  type: UserActionTypes.USER_SIGNIN;
  payload: IUserSignIn;
}

/**Форма регисрации */
export interface IUserSignUpAction {
  type: UserActionTypes.USER_SIGNUP;
  payload: IUserSignIn;
}
//удалить
export interface IAuthUserAction {
  type: UserActionTypes.USER_AUTH;
}
export interface IUnauthUserAction {
  type: UserActionTypes.USER_UNAUTH;
}

export interface IFetchingUserAction {
  type: UserActionTypes.FETCHING_USER;
}
export interface IFetchingUserSuccessAction {
  type: UserActionTypes.FETCHING_USER_SUCCESS;
  payload: IAuthResponse;
}

export interface IFetchingUserFailureAction {
  type: UserActionTypes.FETCHING_USER_FAILURE;
  payload: ErrorType;
}

//бновление access token
export interface IFetchingTokenAction {
  type: UserActionTypes.FETCHING_TOKEN;
}
export interface IFetchingTokenSuccessAction {
  type: UserActionTypes.FETCHING_TOKEN_SUCCESS;
  payload: IAuthResponse;
}
export interface IFetchingTokenFailureAction {
  type: UserActionTypes.FETCHING_TOKEN_FAILURE;
  payload: ErrorType;
}

export type UserAtions =
  | IFetchingUserAction
  | IAuthUserAction
  | IUnauthUserAction
  | IFetchingUserSuccessAction
  | IFetchingUserFailureAction
  | IFetchingTokenAction
  | IFetchingTokenSuccessAction
  | IFetchingTokenFailureAction;
