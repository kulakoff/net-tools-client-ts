export interface IUser {
  email: string;
  isActivated: boolean;
  id: string;
}
export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

export interface IUserSignIn {
  email: string;
  password: string;
}
////////
export enum UserActionTypes {
  USER_SIGNIN = 'USER_SIGNIN',
  USER_SIGNUP = 'USER_SIGNUP',
  FETCHING_USER = "FETCHING_USER",
  FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS",
  FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE',
  FETCHING_TOKEN = 'FETCHING_TOKEN',
  FETCHING_TOKEN_SUCCESS = 'FETCHING_TOKEN_SUCCESS',
  FETCHING_TOKEN_FAILURE = 'FETCHING_TOKEN_FAILURE',
  USER_AUTH = 'USER_AUTH',
  USER_UNAUTH = 'USER_UNAUTH',

}

/**Форма авторизации */
export interface IUserSignInAction {
  type: UserActionTypes.USER_SIGNIN,
  payload: IUserSignIn
}

/**Форма регисрации */
export interface IUserSignUpAction {
  type: UserActionTypes.USER_SIGNUP,
  payload: IUserSignIn
}
//удалить
export interface IAuthUserAction {
  type: UserActionTypes.USER_AUTH,
}
export interface IUnauthUserAction {
  type: UserActionTypes.USER_UNAUTH,
}


export interface IFetchingUserAction {
  type: UserActionTypes.FETCHING_USER,
}
export interface IFetchingUserSuccessAction {
  type: UserActionTypes.FETCHING_USER_SUCCESS,
  payload: IAuthResponse
}

export interface IFetchingUserFailureAction {
  type: UserActionTypes.FETCHING_USER_FAILURE,
  payload: string,
}

//бновление access token
export interface IFetchingTokenAction {
  type: UserActionTypes.FETCHING_TOKEN
}
export interface IFetchingTokenSuccessAction {
  type: UserActionTypes.FETCHING_TOKEN_SUCCESS,
  payload: IAuthResponse
}
export interface IFetchingTokenFailureAction {
  type: UserActionTypes.FETCHING_TOKEN_FAILURE,
  payload: string
}

export type UserAtions =
  | IFetchingUserAction
  | IAuthUserAction
  | IUnauthUserAction
  | IFetchingUserSuccessAction
  | IFetchingUserFailureAction
  | IFetchingTokenAction
  | IFetchingTokenSuccessAction
  | IFetchingTokenFailureAction

