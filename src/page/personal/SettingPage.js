import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './PersonalStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {alertOrder, get_thousand_num, logMsg, showToast} from '../../utils/ComonHelper'
import {setLoginUser} from "../../service/AccountDao";
import {isEmpty} from "../../config/utils";
import {postRoom_requests} from "../../service/HangoutDao";

export default class PersonalPage extends Component {

    state = {
        nick_name: global.loginUser.nick_name
    }

    refresh = () => {
        const {nick_name} = global.loginUser
        this.setState({
            nick_name
        })
    }

    render() {
        const {nick_name} = this.state
        return (
            <View style={styles.backgroundStyle2}>
                <TouchableOpacity style={[styles.applicationView, {marginTop: 5}]} onPress={() => {
                    if (!isEmpty(global.loginUser))
                        router.toChangeInfoPage(this.refresh)
                }}>
                    <Text style={styles.application_withdraw}>信息修改</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.countTxt}>{nick_name}</Text>
                    <Image style={{width: 6, height: 15, marginLeft: 12}} source={Images.right}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.applicationView, {marginTop: 1}]} onPress={() => {
                    router.toBusinessPage()
                }}>
                    <Text style={styles.application_withdraw}>联系我们</Text>
                    <View style={{flex: 1}}/>
                    <Image style={{width: 6, height: 15, marginLeft: 12}} source={Images.right}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.setBottom}
                    activeOpacity={0}
                    onPress={() => {
                        alertOrder("确认退出？", () => {
                            setLoginUser({})
                            router.popToTop()
                        });

                    }}>
                    <Text style={{color: "#FFFFFF", fontSize: 18}}>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}