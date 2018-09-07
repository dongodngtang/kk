import React, { Component, PureComponent } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Scene, Stack, Tabs, ActionConst } from 'react-native-router-flux';
import { Images, Styles, Metrics, Colors } from '../config/Theme'
import Home from '../page/Home';
import RegisterPage from "../page/account/RegisterPage";
import LoginPage from "../page/account/LoginPage";
import styles from './ScenesStyles';
import { Navigation } from '../page/navagation/Navigation';
import RegisterPageTwo from "../page/account/RegisterPageTwo";
import RegisterPageThree from "../page/account/RegisterPageThree";
import ApplicationRecordPage from "../page/record/ApplicationRecordPage";
import SellInfoPage from '../page/personal/SellInfoPage';
import SettingPage from '../page/personal/SettingPage';
import ChangeInfoPage from "../page/personal/ChangeInfoPage";
import HangoutHotelPage from "../page/hangout/HangoutHotelPage";
import HotelListPage from "../page/hangout/HotelListPage";
import {strNotNull} from "../utils/ComonHelper";

let config = {
    titleStyle: { fontSize: 18, color: "#FFFFFF" },
    navigationBarStyle: { backgroundColor: "#E54A2E" }
}

export const Scenes = () => {

    return <Scene key="root">

        <Scene key="Home"
            {...TopNav({
                title: '澳门旅行商家版',
                hideLeft: true
            })}
            component={Home} />

        {Navigation()}
        <Scene key="Login"
            {...TopNav({
                title: '短信验证登录',
                rightTitle: '注册',
                onRight: () => router.toRegisterPage()
            })}
            component={LoginPage} />

        <Scene key="Register"
            {...TopNav({
                title: '商家注册'
            })}
            component={RegisterPage} />

        <Scene key="RegisterPageTwo"
            {...TopNav({
                title: '商家注册'
            })}
            component={RegisterPageTwo} />

        <Scene key="RegisterPageThree"
            {...TopNav({
                title: '商家注册'
            })}
            component={RegisterPageThree} />

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
            component={SellInfoPage} />

        <Scene key="SettingPage"
            {...TopNav({
                title: '设置'
            })}
            component={SettingPage} />

        <Scene key="ChangeInfoPage"
            {...TopNav({
                title: '信息修改'
            })}
            component={ChangeInfoPage} />

        <Scene key="HangoutHotelPage"
            {...TopNav({
                title: '房间挂售申请'
            })}
            component={HangoutHotelPage} />

        <Scene key="HotelListPage"
               {...TopNav({
                   title: '选择酒店',
                   onRight: () => router.toRegisterPage(),
                   renderRightButton: Images.search
               })}
               component={HotelListPage}/>

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
        const {component, title, hideLeft, rightTitle, onLeft, onRight, renderRightButton} = this.props;

        let pageMsg = `当前界面${component.displayName}`;
        return <View style={Styles.navTop}>
            <TouchableOpacity
                disabled={hideLeft}
                onPress={() => {
                    onLeft ? onLeft() : router.pop()

                }}
                style={Styles.left}>
                {hideLeft ? null : <Image
                    style={{ height: 14, width: 10 }}
                    source={Images.left} />}

            </TouchableOpacity>

            <TouchableOpacity
                onLongPress={() => {
                    if (__DEV__)
                        alert(pageMsg)
                }}
                style={Styles.navTitle}>
                <Text
                    style={{ fontSize: 18, color: 'white' }}>{title}</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    this.props.onRight && this.props.onRight()
                }}
                style={Styles.left}>

                {this.right_content(rightTitle, renderRightButton)}


            </TouchableOpacity>

        </View>
    }

    right_content = (rightTitle, rightButtonImage) => {
        if (strNotNull(rightTitle)) {
            return <Text
                style={{fontSize: 14, color: 'white'}}>{rightTitle}</Text>
        } else if (strNotNull(rightButtonImage)) {
            return <Image style={{height: 17, width: 17, marginLeft: 15, marginRight: 9}} source={rightButtonImage}/>
        }
    }
}