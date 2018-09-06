const api = {
    //内部测试
    dev: 'http://192.168.2.10:3000/v1/',
    dev_ci_at: 'http://192.168.2.10:8801/v10/',

    //test分支用来发布版本  test_ci_at用来跑自动化测试
    test: 'http://test.kkapi.deshpro.com/v1/',
    test_ci_at: 'http://106.75.134.18:8801/v10/',

    //production 用来发布正式生产环境
    staging: 'http://106.75.136.9:8801/v10/',
    production: 'https://kkapi.deshpro.com/v1/',
    recommends: 'recommends',//首页推荐
    login:'merchant/account/login',//登录
    v_codes: 'merchant/account',// 发送验证码
    account_verify: 'merchant/account',//校验验证码是否正确
}

export default api