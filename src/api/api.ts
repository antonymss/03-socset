import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f43c8e0f-6e2c-4a5e-98bc-50c90085e302'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 50) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.log('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        return instance.put (`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

