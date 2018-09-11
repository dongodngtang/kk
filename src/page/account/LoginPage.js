import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './AccountStyles';
import { Colors, Images } from '../../Themes';
import { CountDownButton, Button, Input } from "../../components";
import ExtArea from './ExtArea';
import { postLogin, postCode } from '../../service/AccountDao';
import { showToast,isStrNull} from '../../config/utils';

export default class LoginPage extends Component {


    state = {
        mobile: '',
        vcode: '',
        getCodeDisable: false,
        phoneClear: false,
        ext: '86'
    };

    changed_ext = (code) => {
        this.setState({
            ext: code
        })
    };

    render() {
        const { ext, phoneClear, vcode, getCodeDisable, mobile } = this.state;
        return (
            <View style={[styles.backgroundStyle2]}>
                {/*区号选择*/}
                <TouchableOpacity style={styles.areaView} onPress={() => {
                    this.areaAction && this.areaAction.toggle();
                }}>
                    <TextInput
                        style={{ width: 100 }}
                        autoFocus={false}
                        editable={false}
                        placeholderTextColor={Colors._BBBB}
                        underlineColorAndroid='transparent'
                        testID="ext"
                        // placeholder={!strNotNull(ext) ? '86' : ext}
                        value={ext} />
                    <View style={{ flex: 1 }} />

                    <Image style={{ width: 16, height: 12 }} source={Images.bottomarea} />
                </TouchableOpacity>

                {/*手机号*/}
                <View style={[styles.input_view, { marginTop: 4 }]}>
                    <Image style={{ width: 19, height: 19, marginLeft: 17 }} source={Images.phone} />
                    <TextInput style={styles.input}
                        placeholderTextColor={Colors._BBBB}
                        underlineColorAndroid='transparent'
                        onChangeText={text => {
                            this.setState({
                                mobile: text,
                                phoneClear: text.length > 0
                            })
                        }}
                        testID="input_phone"
                        ref={ref => this.mobile = ref}
                        placeholder={'请输入手机号'} />
                    {/*{phoneClear ? this._phoneClear() : null}*/}

                </View>

                {/*验证码*/}
                <View style={styles.input_view}>
                    <Image style={{ width: 18, height: 21, marginLeft: 17 }} source={Images.vcode} />
                    <TextInput style={styles.input}
                        placeholderTextColor={Colors._BBBB}
                        underlineColorAndroid='transparent'
                        onChangeText={text => {
                            this.setState({
                                vcode: text
                            })
                        }}
                        testID="input_code"
                        placeholder={'验证码'} />


                    <CountDownButton
                        disableBg={'#F3F3F3'}
                        disableColor={'#747474'}
                        style={{ height: 50, backgroundColor: getCodeDisable ? Colors._BBBB : Colors._E54 }}
                        textStyle={styles.down_txt}
                        enable
                        onClick={counting => {
                            if(isStrNull(mobile)){
                                showToast('手机号不能为空')
                                return
                            }
                            postCode({mobile,ext,option_type:'login'},data=>{
                                counting(true)
                            },err=>{
                                showToast(err)
                            })
                            
                        }} />


                </View>

                <TouchableOpacity style={styles.nextBtn}
                    onPress={() => {
        
                        if (isStrNull(mobile) || isStrNull(vcode)) {
                            showToast('内容不能为空')
                            return
                        }
                        let body = {
                            mobile,
                            vcode,
                            ext
                        }
                        postLogin(body, data => {
                            showToast('登录成功')
                            global.router.popToTopRefresh()
                        }, err => {
                            showToast(err)
                        })
                    }}>
                    <Text style={styles.nextTxt}>登录</Text>
                </TouchableOpacity>
                <ExtArea
                    ref={ref => this.areaAction = ref}
                    changed_ext={this.changed_ext} />
            </View>
        )
    }

    _phoneClear = () => {
        return (
            <TouchableOpacity
                testID="btn_input_phone_clear"
                onPress={() => this.mobile.clear()}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50, width: 50
                }}>

                <Image style={{ height: 13, width: 13 }}
                    source={Images.sign_close_gray} />


            </TouchableOpacity>
        )
    };
}