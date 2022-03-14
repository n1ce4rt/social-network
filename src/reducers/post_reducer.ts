import {usersAPI} from "../api/api";

const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'

const initialPostState: initialPostStateType = {
    posts: [
        {message: 'Привет.', id: '1', like: 0},
        {message: 'Я тут!', id: '2', like: 0},
        {message: 'Мои первые посты', id: '3', like: 0},
        {message: 'Лайки', id: '4', like: 0},
        {message: 'Да', id: '5', like: 0},
    ],
    status: ''
}
export const post_reducer = (state: initialPostStateType = initialPostState, action: actionType): initialPostStateType => {


    switch (action.type) {
        case "CREATE_POST":
            debugger
            return {...state, posts: [{message: action.postText, id: action.id, like: 0}, ...state.posts]}


        case "DELETE_POST":
            debugger
            return {...state, posts: [...state.posts.filter(post => post.id !== action.id)]}

        case "SET_NEW_STATUS":
            return {...state, status: action.status}

        default:
            return state
    }
}
export const createNewPostAC = (postText: string, id: string): createNewPostACType => ({
    type: CREATE_POST,
    postText,
    id
} as const)
export const deletePostAC = (id: string): deletePostACType => ({type: DELETE_POST, id} as const)
export const setNewStatusAC = (status: string): setNewStatusACACType => ({type: 'SET_NEW_STATUS', status})
export const updateStatusAC = (status: string): updateStatusACType => ({type: 'UPDATE_STATUS', status})

export const setStatusTC = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.getStatus(userId)
            .then(response => {
                    dispatch(setNewStatusAC(response.data))

            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: any) => {
        usersAPI.updateStatus(status).then(() => {
            usersAPI.getStatus('21543')
                .then(response => {
                    debugger
                    dispatch(setNewStatusAC(response.data))

                })
        })

    }
}

export type updateStatusACType = {
    type: 'UPDATE_STATUS'
    status: string
}
export type initialPostStateType = {
    posts: postsType
    status?: string
}
export type postsType = postType[]
export type postType = {
    message: string
    id: string
    like: number
}
export type actionType = createNewPostACType | deletePostACType | setNewStatusACACType
export type createNewPostACType = {
    type: 'CREATE_POST'
    postText: string
    id: string
}
export type deletePostACType = {
    type: 'DELETE_POST'
    id: string
}
export type setNewStatusACACType = {
    type: 'SET_NEW_STATUS'
    status: string
}