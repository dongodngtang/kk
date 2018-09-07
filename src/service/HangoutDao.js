import {get, post, put, setToken} from '../config/fetch'
import api from '../config/api'

export function hotels(body, resolve, reject) {
    get(api.hotels, body, ret => {
        resolve(ret.data)
    }, reject)
}


export function getRoomList(body, resolve, reject) {
    get(api.room_list(body), body, ret => {
        resolve(ret.data)
    }, reject)
}

export function postRoom_requests(body, resolve, reject) {
    post(api.sale_room_requests, body, ret => {
        resolve(ret.data)
    }, reject)
}