/**
 * utils.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/6/1.
 *
 */
import React from 'react';
import {Alert} from 'react-native';
import _ from 'lodash'
import moment from 'moment'
import Toast from '../components/toast';

export const YYYYMMDD = 'YYYY-MM-DD'

let locations = [];//定位城市列表
export function setLocations(arr) {
  locations = arr;
}


let following_ids = [];


export function showToast(msg) {
  if (!isStrNull(msg)) {
    const toast = Toast.show(msg, {
      testID: 'deshproToast', position: 200, duration: Toast.durations.SHORT,
      shadow: false,
      onHidden: (siblingManager) => {
        Toast.hide(toast)
      }
    });
  }
}

export function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}

/**
 * 已关注
 * @param ids
 */
export function setFollowerIds(ids) {
  logMsg('已关注用户IDs:', ids)
  following_ids = ids;
}

/**
 * 是否已关注
 * @param user_id
 */
export function isFollowing(user_id) {
  logMsg('是否关注:', following_ids, following_ids.indexOf(user_id))
  return following_ids.indexOf(user_id) > -1
}

export function logMsg(...msg) {
  if (__DEV__)
    console.log(...msg)
}

export function isLogin() {
  return !isEmpty(global.loginUser)
}

export function getLoginUser() {
  return global.loginUser;
}

/**
 * 时间转化
 * @param date
 * @param format
 * @returns {string}
 */
export function convertDate(date, format) {
  return moment(date).format(format)
}

export function unix_format(timestamp, time_format) {
  return moment.unix(timestamp).format(time_format)
}

/**
 * 时间戳转 YYYY-MM-DD
 * @param {*} timestamp
 */
export function unix(timestamp) {
  return moment.unix(timestamp).format(YYYYMMDD)
}

/**
 * 首页城市
 */
export function getLocations() {
  return locations;
}

export function fileName(path) {
  let index = path.lastIndexOf('/')
  return path.substr(index + 1)
}


/*时间 1小时前*/
export function getDateDiff(dateTimeStamp) {

  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();

  var diffValue = now - dateTimeStamp * 1000;
  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  let result = '';
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + '月前';
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + '周前';
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + '天前';
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + '小时前';
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + '分钟前';
  } else
    result = '刚刚';
  return result;
}

export function showAlert(title, message) {
  Alert.alert(title, message, [{
    text: '取消',
    style: 'cancel'
  }, {
    text: '确定',
  }])
}


export function isEmpty(param) {
  return _.isEmpty(param)
}

export function isStrNull(str) {
  return str === null || str === undefined || str.length < 1;
}

