import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '39990bf1-fcd9-441c-900a-1e6d1c4b33a7'}
    }
)

export const usersAPI = {

    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    authorizeMe(data) {
        return instance.post(`/auth/login`, {data}).then(response => response)
    },
    getUsers(page) {
        return instance.get(`users?page=${page}&count=14`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    followUserApi(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollowUserApi(userId) {
        return instance.delete(`follow/${userId}`,)
    },
    getStatus(userId) {
        return instance.get( `profile/status/${userId}`).then(response => response)
    },
    updateStatus(status) {
        debugger
        return instance.put(`profile/status`, {status: status})
    }
}


