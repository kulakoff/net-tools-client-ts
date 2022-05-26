import { IUserState, UserActionTypes, UserAtions } from "../../types/user"
const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAtions): IUserState => {
    console.log("userReducer action : ", action)

    switch (action.type) {
        case UserActionTypes.FETCHING_USER:
            return { isLoading: true, error: null, user: null }
        case UserActionTypes.FETCHING_USER_SUCCESS:
            return { isLoading: false, error: null, user: action.payload.user }

        default:
            return state
    }

    


}