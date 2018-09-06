/*对象是否为空对象*/
import Toast from 'react-native-root-toast';
import _ from 'lodash';


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