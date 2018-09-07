import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './AccountStyles';
import {Colors, Images} from "../../Themes";
import ExtArea from './ExtArea';
import { postRegister } from '../../service/AccountDao';
import { showToast } from '../../config/utils';

export default class RegisterPageThree extends Component {

    state = {
        other_mobile: '',
        name: ''
    };

    render() {
        const {other_mobile, name} = this.state;
        return (
            <View style={styles.backgroundStyle2}>

                <TouchableOpacity style={[styles.input_view, {marginTop: 10}]}>
                    <Text style={styles.nameTxt}>联系人姓名</Text>
                    <TextInput style={styles.input}
                               placeholderTextColor={Colors._BBBB}
                               underlineColorAndroid='transparent'
                               onChangeText={text => {
                                   this.setState({
                                       name: text,
                                       phoneClear: text.length > 0
                                   })
                               }}
                               testID="input_phone"
                               ref={ref => this.name = ref}
                               placeholder={'请输入姓名'}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.input_view, {marginTop: 1}]}>
                    <Text style={styles.nameTxt}>联系人电话</Text>
                    <TextInput style={styles.input}
                               placeholderTextColor={Colors._BBBB}
                               underlineColorAndroid='transparent'
                               onChangeText={text => {
                                   this.setState({
                                       other_mobile: text
                                   })
                               }}
                               testID="input_phone"
                               ref={ref => this.other_mobile = ref}
                               placeholder={'请输入电话'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextBtn}
                                  onPress={() => {
                                      const {mobile,ext,vcode} = this.props.params;
                                      let body = {
                                        contact:other_mobile,
                                        nick_name:name,
                                        ext,
                                        mobile,
                                        vcode
                                      }
                                      postRegister(body,data=>{
                                        global.router.popToTopRefresh()
                                      },err=>{
                                          showToast(err)
                                      })
                                     
                                  }}>
                    <Text style={styles.nextTxt}>完成</Text>
                </TouchableOpacity>

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