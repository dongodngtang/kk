const api = {
    //内部测试
    dev: 'http://192.168.2.10:3000/v1/',
    dev_ci_at: 'http://192.168.2.10:8801/v10/',

    //test分支用来发布版本  test_ci_at用来跑自动化测试
    test: 'http://test.kkapi.deshpro.com/v1/',
    test_ci_at: 'http://106.75.134.18:8801/v10/',

    //production 用来发布正式生产环境
    staging: 'http://106.75.136.9:8801/v10/',
    production: 'http://kkapi.deshpro.com/v1/',
    recommends: 'recommends',//首页推荐
    hotels: 'hotels',
    login: 'merchant/account/login',//登录
    v_codes: 'merchant/v_codes',// 发送验证码
    account_verify: 'merchant/verify_vcode',//校验验证码是否正确
    account: 'merchant/account',
    room_list: room_list,//获取酒店房间列表
    sale_room_requests: 'merchant/sale_room_requests',// 创建房间挂售申请
    room_request_list: room_request_list,//房间挂售申请列表
    contacts: 'contacts',
    cancel_room: cancel_room,//房间挂售下架
    change_price: change_price,//房间挂售修改金额
    user_info: 'merchant/account/me',//获取用户个人信息
    room_withdrawals:'merchant/room_withdrawals',//房间提现申请
    order_verification:'merchant/order_verification'

}

function change_price(body) {
    const {id} = body;
    return `merchant/sale_room_requests/${id}`;
}

function cancel_room(body) {
    const {id} = body;
    return `merchant/sale_room_requests/${id}/cancel`;
}

function hotels(body) {
    const {request_type} = body;
    return `merchant/sale_room_requests?request_type=${request_type}`
}

function room_list(body) {
    const {begin_date, id} = body;
    return `hotels/${id}/rooms?date=${begin_date}`
}

function room_request_list(body) {
    const {request_type} = body;
    return `merchant/sale_room_requests?request_type=${request_type}`
}


export default api