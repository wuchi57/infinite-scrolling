import request from '@/utils/request'

export default class User {
    static async getUsers (limit, skip) {
        const res = await request({
            url: `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
            method: 'get'
        })
        return res.data.users
    }
}
