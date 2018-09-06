import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, Image, Platform} from 'react-native';
import {Images, Colors, Metrics} from '../../Themes';
import TabIcon from './TabIcon';


export default class BottomNavigation extends Component {


    render() {

        const {navigation, jumpTo} = this.props;

        const {routes, index} = navigation.state

        return (
            <View style={styleBN.navigation}>

                {routes.map((item, tabIndex) => {
                    return <TouchableOpacity
                        key={item.key}
                        onPress={() => {
                            jumpTo(item.key)

                        }}
                        style={styleBN.navigations}>
                       <TabIcon tab={item.key}
                                focused={tabIndex===index}/>
                    </TouchableOpacity>
                })}


            </View>

        )
    }


}

const styleBN = StyleSheet.create({
    navigation: {
        height: (Platform.OS === 'ios') && (Metrics.screenHeight === 812 && Metrics.screenWidth === 375) ? 75 : 50,
        width: '100%',
        backgroundColor: '#ffffff',
        opacity: 0.96,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors._ECE,
        paddingBottom: (Platform.OS === 'ios') && (Metrics.screenHeight === 812 && Metrics.screenWidth === 375) ? 16 : 0
    },
    navigations: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    },
    buttonView: {
        width: 94,
        height: 50,
        backgroundColor: '#FFE9AD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topImg: {
        width: 19,
        height: 12
    },
    topText: {
        backgroundColor: 'transparent',
        color: '#151516',
        fontSize: 12,
        marginTop: 5
    }
});

