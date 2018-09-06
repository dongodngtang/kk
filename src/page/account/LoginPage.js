import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './AccountStyles';
import {Colors, Images} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import ExtArea from './ExtArea';

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
        const {ext, phoneClear, vcode, getCodeDisable} = this.state;
        return (
            <View style={[styles.backgroundStyle2]}>
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

                {/*手机号*/}
                <View style={[styles.input_view, {marginTop: 4}]}>
                    <Image style={{width: 19, height: 19,marginLeft:17}} source={Images.phone}/>
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

                </View>

                {/*验证码*/}
                <View style={styles.input_view}>
                    <Image style={{width: 18, height: 21,marginLeft:17}} source={Images.vcode}/>
                    <TextInput style={styles.input}
                               placeholderTextColor={Colors._BBBB}
                               underlineColorAndroid='transparent'
                               onChangeText={text => {
                                   this.setState({
                                       vcode: text
                                   })
                               }}
                               testID="input_code"
                               placeholder={'验证码'}/>


                    <CountDownButton
                        style={{height: 50, backgroundColor: getCodeDisable ? Colors._BBBB : Colors._E54}}
                        textStyle={styles.down_txt}
                        enable
                        onClick={counting => {
                            counting(true)
                        }}/>


                </View>

                <ExtArea
                    ref={ref => this.areaAction = ref}
                    changed_ext={this.changed_ext}/>
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

                <Image style={{height: 13, width: 13}}
                       source={Images.sign_close_gray}/>


            </TouchableOpacity>
        )
    };
}