import axios from "axios";
import { log } from "console";
import { Dispatch } from "react";
import { API_URL } from "../../http";
import AuthService from "../../services/AuthService";
import { UserAtions, UserActionTypes, IUserSignIn, IAuthResponse } from "../../types/user"

export const singInUser = (singInData: IUserSignIn) => {
    return async (dispatch: Dispatch<UserAtions>) => {
        try {
            console.log("singInUser input props: ", singInData.email, singInData.password)
            //FETCHING_USER
            dispatch({
                type: UserActionTypes.FETCHING_USER
            })
            const { data } = await AuthService.login(singInData.email, singInData.password)
            console.log("AuthService.login result: ", data);
            localStorage.setItem("token", data.accessToken)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({ type: UserActionTypes.FETCHING_USER_SUCCESS, payload: data });

        } catch (error) {
            console.log("singInUser error: >>> ", error);
            dispatch({
                type: UserActionTypes.FETCHING_USER_FAILURE,
                payload: "Ошибка авторизации, тест"
            })
        }
    }
}

export const logoutUser = () => {
    return async (dispatch: Dispatch<UserAtions>) => {
        console.log("logoutUser >>>")
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<UserAtions>) => {
        try {
            // TODO: dispatch setLoading true
            dispatch({ type: UserActionTypes.FETCHING_TOKEN })
            console.log("checkAuth start >>>");
            const { data } = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
                withCredentials: true,
            });
            console.log("checkAuth refresh response: ", data);
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data.user))
            if (data) {
                dispatch({ type: UserActionTypes.FETCHING_TOKEN_SUCCESS, payload: data })
            }

        } catch (error: any) {
            console.log("checkAuth error : ", error)
            //TODO: add dispatch!
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            dispatch({
                type: UserActionTypes.FETCHING_TOKEN_FAILURE, payload: error.message
            })
        } finally {
            //this.setLoading(false);
            console.log("this.setLoading(false)");

        }
    }
}