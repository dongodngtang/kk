/**
 * SwitchBase.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/9/25.
 *
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './PersonalStyles';
import {Images} from "../../Themes";
import api from '../../config/api'
import {setBaseUrl, setToken} from "../../config/fetch";
import {setLoginUser} from "../../service/AccountDao";

export default class SwitchBase extends Component {


  switchBase = (type)=>{
    storage.save({
      key: 'BaseUrl',
      data: type
    })
    setBaseUrl(type)
    setTimeout(()=>{
      setToken('')
      setLoginUser({})
      router.popToTop()
    },1000)
  }

  render() {
    return <View>
      <TouchableOpacity style={[styles.applicationView, {marginTop: 10}]} onPress={() => {
        this.switchBase('test')
      }}>
        <Text style={styles.application_withdraw}>{`测试环境：${api.test}`}</Text>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.applicationView, {marginTop: 1}]} onPress={() => {
        this.switchBase('pro')
      }}>
        <Text style={styles.application_withdraw}>{`正式环境：${api.production}`}</Text>

      </TouchableOpacity>
    </View>
  }
}