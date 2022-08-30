import axios from "axios";
// import { log } from "console";
import { Dispatch } from "react";
import { API_URL } from "../../http";
import AuthService from "../../services/AuthService";
import {
  UserAtions,
  UserActionTypes,
  // IUserSignIn,
  IAuthResponse,
  // IUserSignUp,
} from "../../types/user";

// export const singInUser = (singInData: IUserSignIn) => {
//   return async (dispatch: Dispatch<UserAtions>) => {
//     try {
//       console.log(
//         "singInUser input props: ",
//         singInData.email,
//         singInData.password
//       );
//       //FETCHING_USER
//       dispatch({
//         type: UserActionTypes.FETCHING_USER,
//       });
//       const response = await AuthService.login(
//         singInData.email,
//         singInData.password
//       );
//       // console.log("response: ", response)
//       //      console.log("response: ", response)
//       localStorage.setItem("token", response.data.accessToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       dispatch({
//         type: UserActionTypes.FETCHING_USER_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error: any) {
//       // console.log("singInUser error: >>> ", error.response?.data)
//       dispatch({
//         type: UserActionTypes.FETCHING_USER_FAILURE,
//         payload: error.response?.data,
//       });
//     }
//   };
// };

// export const signOut = () => {
//   return async (dispatch: Dispatch<UserAtions>) => {
//     console.log("logoutUser >>>");
//     await AuthService.logout().then(() => {
//       dispatch({ type: UserActionTypes.USER_UNAUTH });
//       localStorage.removeItem("token")
//       localStorage.removeItem("user")
//     })


//   };
// };

// export const checkAuth = () => {
//   return async (dispatch: Dispatch<UserAtions>) => {
//     try {
//       // TODO: dispatch setLoading true
//       dispatch({ type: UserActionTypes.FETCHING_TOKEN });
//       console.log("checkAuth start >>>");
//       const { data } = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh`, {
//         withCredentials: true,
//       });
//       localStorage.setItem("token", data.accessToken);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       if (data) {
//         dispatch({
//           type: UserActionTypes.FETCHING_TOKEN_SUCCESS,
//           payload: data,
//         });
//       }
//     } catch (error: any) {
//       console.log("checkAuth error : ", error);
//       //TODO: add dispatch!
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       dispatch({
//         type: UserActionTypes.FETCHING_TOKEN_FAILURE,
//         payload: error.message,
//       });
//     } finally {
//       //this.setLoading(false);
//       console.log("this.setLoading(false)");
//     }
//   };
// };

// export const singUpUser = (singUpData: IUserSignUp) => {
//   return async (dispatch: Dispatch<UserAtions>) => {
//     try {
//       console.log(
//         "singUpUser input props: ",
//         singUpData
//       );
//       //FETCHING_USER
//       dispatch({
//         type: UserActionTypes.FETCHING_USER,
//       });
//       const response = await AuthService.registration(singUpData);
//       // console.log("response: ", response)
//       //      console.log("response: ", response)
//       localStorage.setItem("token", response.data.accessToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       dispatch({
//         type: UserActionTypes.FETCHING_USER_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error: any) {
//       // console.log("singInUser error: >>> ", error.response?.data)
//       dispatch({
//         type: UserActionTypes.FETCHING_USER_FAILURE,
//         payload: error.response?.data,
//       });
//     }
//   };
// };
