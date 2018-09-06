import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './AccountStyles';
import {Colors, Images} from "../../Themes";
import ExtArea from './ExtArea';

export default class RegisterPage extends Component {

    state = {
        mobile: '',
        phoneClear: false,
        ext: '86'
    };

    render() {
        const {ext, phoneClear, mobile} = this.state;
        return (
            <View style={styles.backgroundStyle2}>
                <Text style={styles.registerTxt}>手机号注册</Text>
                {/*区号选择*/}
                <TouchableOpacity style={styles.areaView} onPress={() => {
                    this.areaAction && this.areaAction.toggle();
                }}>
                    <TextInput
                        style={{width: 100}}
                        autoFocus={false}
                        editable={false}
                        placeholderTextColor={Colors._BBBB}
                        underlineColorAndroid='transparent'
                        testID="ext"
                        // placeholder={!strNotNull(ext) ? '86' : ext}
                        value={ext}/>
                    <View style={{flex: 1}}/>

                    <Image style={{width: 16, height: 12}} source={Images.bottomarea}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.input_view, {marginTop: 1}]}>
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
                               placeholder={'请输入手机号'}/>
                    {phoneClear ? this._phoneClear() : null}
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextBtn}
                                  onPress={() => {
                                      global.router.toRegisterPageTwo()
                                  }}>
                    <Text style={styles.nextTxt}>下一步</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}
                                  onPress={() => {
                                      global.router.toLoginPage()
                                  }}>
                    <Text style={styles.loginTxt}>已有账号，去登录></Text>
                </TouchableOpacity>

                <ExtArea
                    ref={ref => this.areaAction = ref}
                    changed_ext={this.changed_ext}/>
            </View>
        )
    }

    changed_ext = (code) => {
        this.setState({
            ext: code
        })
    };

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

                <Image style={{height: 13, width: 13}}
                       source={Images.sign_close_gray}/>


            </TouchableOpacity>
        )
    };
}