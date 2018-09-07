import api from '../config/api'
import { get, post, put ,setToken} from '../config/fetch'
import { logMsg } from '../config/utils';

/**
 * 发送验证码 
 * 校验验证码是否正确
 * @param {*} body 
 * @param {*} resolve 
 * @param {*} reject 
 */
export function postCode(body, resolve, reject) {
    post(api.v_codes, body, ret => {
        resolve(ret.data)
    }, reject)
}

export function codeVerify(body, resolve, reject) {
    post(api.account_verify, body, ret => {
        resolve(ret.data)
    }, reject)
}

function setLoginUser(login) {
    global.loginUser = login;
    setToken(login.access_token)
}
/**
 * 
 * @param {*} body 
 * @param {*} resolve 
 * @param {*} reject 
 */
export function postRegister(body, resolve, reject) {
    post(api.account + '/register', body, ret => {
        let login = ret.data
        logMsg(login)
        setLoginUser(login)
        resolve(login)
    }, reject)
}

export function postLogin(body, resolve, reject) {
    post(api.account + '/login', body, ret => {
        let login = ret.data
        logMsg(login)
        setLoginUser(login)
        resolve(login)
    }, reject)
}

export function putInfo(body, resolve, reject) {
    post(api.account, body, ret => {
        resolve(ret.data)
    }, reject)
}