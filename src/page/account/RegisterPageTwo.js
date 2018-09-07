import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './AccountStyles';
import {Colors, Images} from "../../Themes";
import {CountDownButton, Button, Input} from "../../components";
import { postCode, codeVerify } from '../../service/AccountDao';
import { showToast, logMsg } from '../../utils/ComonHelper';
import { isStrNull } from '../../config/utils';

export default class RegisterPageTwo extends Component {

    state = {
        vcode: '',
        vcodeClear: false,
        getCodeDisable:false
    };

    componentDidMount(){
       this.sendCode()
    }

    sendCode =(counting)=>{
        const {mobile,ext} = this.props.params;
        let body = {
            option_type:'register',
            mobile,
            ext
        }
        postCode(body,data=>{
            counting?counting(true):this.countDownButton && this.countDownButton._shouldStartCountting(true)
        },err=>{
            showToast(err)
        })
    }

    render() {
        const {vcode, vcodeClear,getCodeDisable} = this.state;
        const {mobile,ext} = this.props.params;
        return (
            <View style={styles.backgroundStyle2}>
                <Text style={styles.registerTxt}>验证码已发送至</Text>
                <View style={[styles.containerRow,styles.sendCodeView]}>
                    <Text style={styles.registerTxt2}>{`手机号${mobile}，请查收`}</Text>
                    <View style={{flex:1}}/>
                    <CountDownButton
                        ref={ref=>this.countDownButton =ref}
                        style={{backgroundColor: getCodeDisable ? Colors._BBBB : Colors._E54}}
                        textStyle={styles.down_txt}
                        enable
                        onClick={this.sendCode}/>
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
                                      if(isStrNull(vcode)){
                                          showToast('验证码不能为空')
                                          return
                                      }
                                      let body = {
                                          mobile,
                                          ext,
                                          option_type:'register',
                                          vcode
                                      }
                                      codeVerify(body,data=>{
                                        global.router.toRegisterPageThree(body)
                                      },err=>{
                                          showToast(err)
                                      })
                                     
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