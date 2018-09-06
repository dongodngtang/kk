import React, {Component, PureComponent} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {Scene, Stack, Tabs, ActionConst} from 'react-native-router-flux';
import {Images, Styles, Metrics, Colors} from '../config/Theme'
import Home from '../page/Home';
import RegisterPage from "../page/account/RegisterPage";
import LoginPage from "../page/account/LoginPage";
import styles from './ScenesStyles';
import {Navigation} from '../page/navagation/Navigation';
import RegisterPageTwo from "../page/account/RegisterPageTwo";
import RegisterPageThree from "../page/account/RegisterPageThree";
import ApplicationRecordPage from "../page/record/ApplicationRecordPage";
import SellInfoPage from '../page/personal/SellInfoPage';
import SettingPage from '../page/personal/SettingPage';
import ChangeInfoPage from "../page/personal/ChangeInfoPage";
import HangoutHotelPage from "../page/hangout/HangoutHotelPage";

let config = {
    titleStyle: {fontSize: 18, color: "#FFFFFF"},
    navigationBarStyle: {backgroundColor: "#E54A2E"}
}

export const Scenes = () => {

    return <Scene key="root">
        {Navigation()}
        <Scene key="Home"
               {...TopNav({
                   title: '澳门旅行商家版',
                   hideLeft: true
               })}
               component={Home}/>


        <Scene key="Login"
               {...TopNav({
                   title: '短信验证登录',
                   rightTitle: '注册',
                   onRight: () => router.toRegisterPage()
               })}
               component={LoginPage}/>

        <Scene key="Register"
               {...TopNav({
                   title: '商家注册'
               })}
               component={RegisterPage}/>

        <Scene key="RegisterPageTwo"
               {...TopNav({
                   title: '商家注册'
               })}
               component={RegisterPageTwo}/>

        <Scene key="RegisterPageThree"
               {...TopNav({
                   title: '商家注册'
               })}
               component={RegisterPageThree}/>

        <Scene type={ActionConst.RESET}
               key="Main"
               {...TopNav({
                   title: '申请记录',
                   hideLeft: true
               })}
               component={ApplicationRecordPage}>

        </Scene>

        <Scene key="SellInfoPage"
               {...TopNav({
                   title: '成功出售'
               })}
               component={SellInfoPage}/>

        <Scene key="SettingPage"
               {...TopNav({
                   title: '设置'
               })}
               component={SettingPage}/>

        <Scene key="ChangeInfoPage"
               {...TopNav({
                   title: '信息修改'
               })}
               component={ChangeInfoPage}/>

        <Scene key="HangoutHotelPage"
               {...TopNav({
                   title: '房间挂售申请'
               })}
               component={HangoutHotelPage}/>

    </Scene>

}

export const TopNav = (props) => {

    return {
        ...props,
        navBar: NavBar
    }
};

class NavBar extends PureComponent {

    render() {
        const {component, title, hideLeft, rightTitle, onLeft, onRight} = this.props;

        let pageMsg = `在page/index查找${component.displayName}`;
        return <View style={Styles.navTop}>
            <TouchableOpacity
                disabled={hideLeft}
                onPress={() => {
                    onLeft ? onLeft() : router.pop()

                }}
                style={Styles.left}>
                {hideLeft ? null : <Image
                    style={{height: 14, width: 10}}
                    source={Images.left}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onLongPress={() => {
                    if (__DEV__)
                        showAlert(title, pageMsg)
                }}
                style={Styles.navTitle}>
                <Text
                    style={{fontSize: 18, color: 'white'}}>{title}</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    this.props.onRight && this.props.onRight()
                }}
                style={Styles.left}>
                {rightTitle ? <Text
                    style={{fontSize: 14, color: 'white'}}>{rightTitle}</Text> : null}

            </TouchableOpacity>

        </View>
    }
}