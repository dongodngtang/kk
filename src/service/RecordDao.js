import {get, post, put, setToken} from '../config/fetch'
import api from '../config/api'

export function getRoomRequest(body, resolve, reject) {
    get(api.room_request_list(body), body, ret => {
        resolve(ret.data)
    }, reject)
}
