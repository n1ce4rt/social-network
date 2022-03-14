import {setStatusAC} from "./app_reducer";
import {usersAPI} from "../api/api";


export type initialAuthStateType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}
const initialAuthState: initialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

export const auth_reducer = (state:initialAuthStateType = initialAuthState, action: authMeACType):initialAuthStateType => {

    switch (action.type) {

        case "AUTH_ME":

            return { ...state, ...action.data, isAuth: true }

        default:
            return state
    }


}
export type authMeACType = {
    type: 'AUTH_ME'
    data: initialAuthStateType
}
export const authMeAC = (data: initialAuthStateType): authMeACType => ({type: 'AUTH_ME', data} as const)



export const authMeTC = () => {
    return (dispatch : any) => {
        dispatch(setStatusAC('loading'))

        usersAPI.authMe()
            .then((response) => {

                if ( response.resultCode === 0)
                    dispatch(authMeAC(response.data))
                dispatch(setStatusAC('nice'))
            })

    }
}
export const authorizeMeTC = (data: any) => {
    return (dispatch : any) => {
        dispatch(setStatusAC('loading'))
        debugger
        usersAPI.authorizeMe(data)
            .then((response) => {
                debugger
                if ( response.data.resultCode === 0) {
                    dispatch(authMeAC(response.data))
                }
                dispatch(setStatusAC('nice'))
            })

    }
}