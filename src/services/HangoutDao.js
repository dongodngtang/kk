import * as helper from '../config/fetch';
import Api from '../config/api';

export function hotels(body, resolve, reject) {
    helper.get(Api.hotels, ret => {
        resolve(ret.data)
    }, reject, body)
}