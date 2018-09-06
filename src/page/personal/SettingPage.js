import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './PersonalStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {get_thousand_num} from '../../utils/ComonHelper'

export default class PersonalPage extends Component {

    render(){
        return(
            <View style={styles.backgroundStyle2}>
                <TouchableOpacity style={[styles.applicationView,{marginTop:5}]} onPress={()=>{
                    router.toChangeInfoPage()
                }}>
                    <Text style={styles.application_withdraw}>信息修改</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.countTxt}>李晓月</Text>
                    <Image style={{width: 6, height: 15, marginLeft: 12}} source={Images.right}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.applicationView,{marginTop:1}]} onPress={()=>{

                }}>
                    <Text style={styles.application_withdraw}>联系我们</Text>
                    <View style={{flex: 1}}/>
                    <Image style={{width: 6, height: 15, marginLeft: 12}} source={Images.right}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.setBottom}
                    activeOpacity={0}
                    onPress={() => {

                    }}>
                    <Text style={{color: "#FFFFFF", fontSize: 18}}>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}