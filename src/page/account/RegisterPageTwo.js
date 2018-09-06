import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './AccountStyles';
import {Colors, Images} from "../../Themes";
import {CountDownButton, Button, Input} from "../../components";

export default class RegisterPageTwo extends Component {

    state = {
        vcode: '',
        vcodeClear: false,
        getCodeDisable:false
    };

    render() {
        const {vcode, vcodeClear,getCodeDisable} = this.state;
        return (
            <View style={styles.backgroundStyle2}>
                <Text style={styles.registerTxt}>验证码已发送至</Text>
                <View style={[styles.containerRow,styles.sendCodeView]}>
                    <Text style={styles.registerTxt2}>手机号13858667788，请查收</Text>
                    <View style={{flex:1}}/>
                    <CountDownButton
                        style={{backgroundColor: getCodeDisable ? Colors._BBBB : Colors._E54}}
                        textStyle={styles.down_txt}
                        enable
                        onClick={counting => {
                            counting(true)
                        }}/>
                </View>

                <TouchableOpacity style={[styles.input_view, {marginTop: 1}]}>
                    <TextInput style={styles.input}
                               placeholderTextColor={Colors._BBBB}
                               underlineColorAndroid='transparent'
                               onChangeText={text => {
                                   this.setState({
                                       vcode: text,
                                       vcodeClear: text.length > 0
                                   })
                               }}
                               testID="input_phone"
                               ref={ref => this.vcode = ref}
                               placeholder={'请输入验证码'}/>
                    {vcodeClear ? this._vcodeClear() : null}
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextBtn}
                                  onPress={() => {
                                      global.router.toRegisterPageThree()
                                  }}>
                    <Text style={styles.nextTxt}>下一步</Text>
                </TouchableOpacity>

            </View>
        )
    }

    changed_ext = (code) => {
        this.setState({
            ext: code
        })
    };

    _vcodeClear = () => {
        return (
            <TouchableOpacity
                testID="btn_input_phone_clear"
                onPress={() => this.vcode.clear()}
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