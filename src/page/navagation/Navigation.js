import React, {Component} from 'react';
import {Scene, Stack, Tabs} from 'react-native-router-flux';
import {
    StyleSheet
} from 'react-native';
import ApplicationRecordPage from '../record/ApplicationRecordPage';
import HangoutManagementPage from '../hangout/HangoutManagementPage';
import PersonalPage from '../personal/PersonalPage';
import BottomNavigation from './BottomNavigation';
import {TopNav} from "../../config/Scenes";


export const Navigation = () => {


    return (
        <Tabs
            hideNavBar
            type="reset"
            style={styles.tabs}
            lazy
            key="Navigation"
            showLabel={false}
            tabBarPosition={'bottom'}
            swipeEnabled={false}
            animationEnabled={false}
            tabBarComponent={BottomNavigation}
        >
            <Stack
                key="record"
            >
                <Scene
                    key="tab_home"
                    component={ApplicationRecordPage}
                    {...TopNav({
                        title: '商家注册',
                        hideLeft:true
                    })}
                />
            </Stack>
            <Stack
                key="management">
                <Scene key="tab_news"
                       component={HangoutManagementPage}
                       {...TopNav({
                           title: '挂售管理',
                           hideLeft:true
                       })}
                />
            </Stack>

            <Stack
                key="me">
                <Scene key="tab_discover"
                       component={PersonalPage}
                       {...TopNav({
                           title: '个人',
                           hideLeft:true
                       })}
                />
            </Stack>
        </Tabs>
    );
};
const styles = StyleSheet.create({
    tabs: {
        height: 50
    },
    textStyle: {
        color: '#AAAAAA'
    },
    textStyle2: {
        color: '#161718'
    },
    bgHomeStyle: {
        height: 24,
        width: 24
    },
    bgInformationStyle: {
        width: 17,
        height: 23
    },
    bgRankStyle2: {
        height: 25,
        width: 25
    }
})