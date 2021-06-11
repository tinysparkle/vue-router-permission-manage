import request from '@/services'
import qs from 'qs';

export function getUserRouters(uid) {
    return request({
        url: 'http://localhost:3000/user_router_auth',
        method: 'post',
        data: {
            uid
        }
    })
}
