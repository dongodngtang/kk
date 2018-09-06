import React, {Component} from 'react';
import {Scene, Stack, Tabs} from 'react-native-router-flux';
import {
    StyleSheet
} from 'react-native';
import ApplicationRecordPage from '../record/ApplicationRecordPage';
import HangoutManagementPage from '../hangout/HangoutManagementPage';
import PersonalPage from '../personal/PersonalPage';
import BottomNavigation from './BottomNavigation';


export const Navigation = () => {


    return (
        <Tabs

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
                key="tab_1"
            >
                <Scene
                    init
                    key="tab_home"
                    component={ApplicationRecordPage}
                    hideNavBar
                />
            </Stack>
            <Stack key="tab_2">
                <Scene key="tab_news"
                       component={HangoutManagementPage}
                       hideNavBar

                />
            </Stack>

            <Stack key="tab_3">
                <Scene key="tab_discover"
                       component={PersonalPage}
                       hideNavBar
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