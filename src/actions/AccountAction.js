import {
    POST_EMAIL_LOGIN, POST_PHONE_LOGIN, POST_VCODE_LOGIN,
    POST_VERIFY_CODE, POST_RESET_PASSWORD, POST_REGISTER, POST_PASSWORD_IMAGE,
    POST_CHANGE_PWD, POST_V_CODE, POST_CERTIFICATION, GET_CERTIFICATION,
    POST_CARD_IMAGE, GET_PLAYER_INFO, POST_BIND_ACCOUNT, POST_CHANGE_BIND,
    POST_CHANGE_PERMISSION, GET_NOTIFICATIONS, DEL_NOTIFICATIONS, GET_UNREAND_MSG,
    SHOW_BACK_TOP, HIDE_BACK_TOP,BACK_TOP,VIDEO_PAUSE,SWITCH_LANGUAGE,
    FETCH_SUCCESS, FETCHING, FETCH_FAIL, FETCH_PASS, FETCH_PASS_SUCCESS, FETCH_PASS_FAIL,
    SHARE_CLOSE,SHARE_OPEN,SWITCH_TAB,
} from '../actions/ActionTypes';
import {showToast} from '../utils/ComonHelper';

export function showTabTop() {
    return {
        type: SHOW_BACK_TOP
    }
}

export function hideTabTop() {
    return {
        type: HIDE_BACK_TOP
    }
}

export function onPressBackTop() {
    return {
        type: BACK_TOP
    }
}

export function videoPause() {
    return {
        type: VIDEO_PAUSE
    }
}
export function shareClose() {
    return{
        type:SHARE_CLOSE,
        share_param:{}
    }

}

export function shareOpen(share_param) {
    return{
        type:SHARE_OPEN,
        share_param
    }
}

export function swichTab(tab) {
    return {
        type: SWITCH_TAB,
        tab
    }
}

