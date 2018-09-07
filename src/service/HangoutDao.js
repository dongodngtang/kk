import {get, post, put, setToken} from '../config/fetch'
import api from '../config/api'

export function hotels(body, resolve, reject) {
    get(api.hotels, body, ret => {
        resolve(ret.data)
    }, reject)
}