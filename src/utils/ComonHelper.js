/*对象是否为空对象*/
import Toast from '../components/toast';
import _ from 'lodash';
import moment from 'moment';
import {Alert} from 'react-native'
import Communications from 'react-native-communications';

export const util = _;

var Actions = {};

/*Action 方法*/
export function setDispatchAction(key, func) {
    Actions[key] = func;
}

export function getDispatchAction() {
    return Actions;
}


export function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}

export function showToast(msg) {

    if (strNotNull(msg)) {
        const toast = Toast.show(msg, {
            testID: 'deshproToast', position: 200, duration: Toast.durations.SHORT,
            shadow: false,
            onHidden: (siblingManager) => {
                Toast.hide(toast)
            }
        });
    }

}

export function logMsg(...msg) {
    if (__DEV__)
        console.log(...msg)
}

export function strNotNull(str) {
    if (str == undefined || str == null || str.length == 0)
        return false;
    else
        return true;
}

export function get_thousand_num(num) {
    return (num || 0).toString().replace(/\d+/, function (n) {
        var len = n.length;
        if (len % 3 === 0) {
            return n.replace(/(\d{3})/g, ',$1').slice(1);
        } else {
            return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
        }
    });
}


/*日期转化*/
export function convertDate(date, formate) {
    if (strNotNull(date))
        return moment(date).format(formate)
}

//UTC 时间转化
export function utcDate(utc, formate) {
    if (strNotNull(utc))
        return moment.unix(utc).format(formate)
}

//正在开发提示
export function alertOrder(str, callback) {
    Alert.alert(str, '', [{
        text: `取消`, onPress: () => {

        }
    }, {
        text: `确认`, onPress: () => {
            callback()
        }
    }])
}

/*拨打电话*/
export function call(phone) {
    Communications.phonecall(phone, false)
}


