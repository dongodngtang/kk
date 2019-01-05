import {get, post, put, setToken} from '../config/fetch'
import api from '../config/api'
import {logMsg} from "../config/utils";
import {setLoginUser} from "./AccountDao";


export function postOrderVerification(param,resolve,reject) {
    post(api.order_verification, param, ret => {
        resolve(ret.data)
    }, reject)
}

export function getRoomRequest(body, resolve, reject) {
    get(api.room_request_list(body), body, ret => {
        resolve(ret.data)
    }, reject)
}


export function putChangePrice(body, resolve, reject) {
    put(api.change_price(body), body, ret => {
        resolve(ret.data)
    }, reject)
}


export function postCancelRoom(body, resolve, reject) {
    post(api.cancel_room(body), body, ret => {
        resolve(ret.data)
    }, reject)
}
