import api from '../config/api'
import {get,post,put} from '../config/fetch'

/**
 * 发送验证码 
 * 校验验证码是否正确
 * @param {*} body 
 * @param {*} resolve 
 * @param {*} reject 
 */
export function postCode(body,resolve,reject){
    post(api.v_codes,body,ret=>{
        resolve(ret.data)
    },reject)
}

export function codeVerify(body,resolve,reject){
    post(api.account_verify,body,ret=>{
        resolve(ret.data)
    },reject)
}
/**
 * 
 * @param {*} body 
 * @param {*} resolve 
 * @param {*} reject 
 */
export function postRegister(body,resolve,reject){
    post(api.account+'/register',body,ret=>{
        resolve(ret.data)
    },reject)
}

export function postLogin(body,resolve,reject){
    post(api.account+'/login',body,ret=>{
        resolve(ret.data)
    },reject)
}

export function putInfo(body,resolve,reject){
    post(api.account,body,ret=>{
        resolve(ret.data)
    },reject)
}