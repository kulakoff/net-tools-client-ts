import axios from "axios";
import { log } from "console";
import { Dispatch } from "react";
import AuthService from "../../services/AuthService";
import { UserAtions, UserActionTypes, IUserSignIn } from "../../types/user"

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