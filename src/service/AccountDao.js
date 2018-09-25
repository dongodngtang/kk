import api from '../config/api'
import {get, post, put, setBaseUrl, setToken} from '../config/fetch'
import {isEmpty, logMsg} from '../config/utils';
import {showToast} from '../utils/ComonHelper';

/**
 * 发送验证码
 * 校验验证码是否正确
 * @param {*} body
 * @param {*} resolve
 * @param {*} reject
 */
export function postCode(body, resolve, reject) {
  post(api.v_codes, body, ret => {
    showToast('验证码已发送')
    resolve(ret.data)
  }, reject)
}

export function codeVerify(body, resolve, reject) {
  post(api.account_verify, body, ret => {
    resolve(ret.data)
  }, reject)
}

/**
 *初始化App
 */
export function initApp() {
  console.log('初始化APP')
  storage.load({key: 'BaseUrl'}).then(ret => {
    setBaseUrl(ret)
    storage.load({key: 'LoginUser'}).then(ret => {
      setLoginUser(ret);
      if (!isEmpty(ret))
        router.toNavigation()
    })
  }).catch(err => {
    storage.load({key: 'LoginUser'}).then(ret => {
      setLoginUser(ret);
      if (!isEmpty(ret))
        router.toNavigation()
    })
  })


}

export function setLoginUser(login) {
  logMsg('登录用户信息', login)
  global.loginUser = login;
  if (!isEmpty(login))
    setToken(login.access_token)
  storage.save({
    key: 'LoginUser',
    data: login
  })
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

export function postWithdrawals(body, resolve, reject) {
  post(api.room_withdrawals, body, ret => {
    resolve(ret)
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
  put(api.account, body, ret => {
    resolve(ret.data)
  }, reject)
}

export function getContacts(resolve, reject) {
  get(api.contacts, {}, ret => {
    resolve(ret.data)
  }, reject)
}


export function getUserInfo(resolve, reject) {
  get(api.user_info, {}, ret => {
    resolve(ret.data)
  }, reject)
}


