
import {usersAPI} from "../api/api";
import {setStatusAC} from "./app_reducer";


const FOLLOW = 'FOLLOW';
const GET_USERS = 'GET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const GET_CURRENT_PROFILE = 'GET_CURRENT_PROFILE'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

const initialState: initialStateType = {
    users: [],
    profile: null,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type actionType = followACType | getUsersACType | setCurrentPageACType | getProfileACType | followingInProgressACType;

export const users_reducer =(state: initialStateType = initialState, action: actionType): initialStateType => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.users], currentPage: action.page, totalUserCount: Math.floor(action.totalCounter / 16 ) }
        case FOLLOW:
          return {...state, users: state.users.map(user => user.id === action.userId? {...user, followed : !user.followed}: user) }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case GET_CURRENT_PROFILE:
            return  {...state, profile: action.profile}
        case "FOLLOWING_IN_PROGRESS":
            return {...state, followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !==action.userId)
            }
        default:
            return state
    }
}
export const getUsersAC =(users: usersType[], page: number, totalCounter: number): getUsersACType => ( {type: GET_USERS, users, page, totalCounter} as const )
export const followingInProgressAC =(isFetching: boolean ,userId: number): followingInProgressACType => ( {type: FOLLOWING_IN_PROGRESS, userId, isFetching} as const)
export const followAC =(userId: number): followACType => ( {type: FOLLOW, userId} as const)
export const setCurrentPageAC =(currentPage: number): setCurrentPageACType => ({ type: SET_CURRENT_PAGE, currentPage} as const)
export const getProfileAC =(profile: profileType): getProfileACType => ({ type: GET_CURRENT_PROFILE, profile} as const)


export const getProfilerTC = (userId: number) => {
    return (dispatch : any) => {
        dispatch(setStatusAC('loading'))
        usersAPI.getProfile(userId)

            .then((response) => {
                dispatch(getProfileAC(response))
                dispatch(setStatusAC('nice'))
            })

    }
}
export const getUsersTC = (page: number) => {
    return (dispatch : any) => {
        dispatch(setStatusAC('loading'))
        usersAPI.getUsers(page)
            .then((response) => {
                dispatch(getUsersAC(response.items, page, response.totalCount))
                dispatch(setStatusAC('nice'))
                dispatch(setCurrentPageAC(page))
            })

    }
}

export const followUserTC = (userId: number, page: number) => {
    return (dispatch : any) => {
        dispatch(followingInProgressAC(true,userId))
        dispatch(setStatusAC('loading'))
        usersAPI.followUserApi(userId)
        usersAPI.getUsers(page).then((response) => {
                dispatch(getUsersAC(response.items, page, response.totalCount))
                dispatch(setStatusAC('nice'))
                dispatch(followingInProgressAC(false,userId))
            })

    }
}
export const unFollowUserTC = (userId: number, page: number) => {
    return (dispatch : any) => {
        dispatch(followingInProgressAC(true,userId))
        dispatch(setStatusAC('loading'))
        usersAPI.unfollowUserApi(userId)
        usersAPI.getUsers(page).then((response) => {
            dispatch(getUsersAC(response.items, page, response.totalCount))
            dispatch(setStatusAC('nice'))
            dispatch(followingInProgressAC(false,userId))
        })

    }
}

export type initialStateType = {
    users: Array<usersType>
    profile: profileType | null
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type photosType = {
    small: string
    large: string
}
export type profileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription:string,
    fullName: string,
    userId: number,
    photos: photosType,

}
export type usersType = {
    id: number
    name: string
    status?: string
    photos: photosType
    followed: boolean
}
export type followingInProgressACType = {
    type: 'FOLLOWING_IN_PROGRESS',
    userId: number
    isFetching: boolean
}
export type getUsersACType = {
    type: 'GET_USERS'
    users: usersType[]
    page: number
    totalCounter: number

}
export type getProfileACType = {
    type: 'GET_CURRENT_PROFILE',
    profile: profileType
}
export type followACType = {
    type: 'FOLLOW'
    userId: number
}
export type setCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
