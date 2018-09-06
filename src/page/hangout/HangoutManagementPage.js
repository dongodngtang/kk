import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import RenderItem from '../record/RenderItem'

const items = [{
    title: '巴黎人酒店 豪华双人房1天',
    time: '2018-8-12 13:23',
    price: '2999',
    start_time: '',
    end_time: '',
    contact: 'hhh',
    phone: '13640988285'
},
    {
        title: '巴黎人酒店 豪华双人房1天',
        time: '2018-8-12 13:23',
        price: '2999',
        start_time: '',
        end_time: '',
        contact: 'hhh',
        phone: '13640988285'
    }];


export default class HangoutManagementPage extends Component {

    render() {
        return (
            <View style={styles.backgroundStyle2}>
                <UltimateFlatList
                    header={() => <View style={{height: 4, backgroundColor: Colors._ECE}}/>}
                    ref={(ref) => this.listView = ref}
                    onFetch={this.onFetch}
                    keyExtractor={(item, index) => `recordList${index}`}  //this is required when you are using FlatList
                    item={this.renderItem}  //this takes two params (item, index)
                    refreshableTitlePull={'下拉刷新'}
                    refreshableTitleRelease={'释放刷新'}
                    dateTitle={'最后刷新'}
                    allLoadedText={'已经没有啦！'}
                    waitingSpinnerText={'加载中...'}
                    separator={this._separator}
                    emptyView={() => <View style={{alignItems: 'center', justifyContent: 'center'}}><Text
                        style={{color: '#F3F3F3', fontSize: 15}}>暂无信息</Text></View>}
                />
            </View>

        )
    }

    _separator = () => {
        return (
            <View style={{height: 1, backgroundColor: '#F3F3F3', width: Metrics.screenWidth}}/>
        )
    };


    onFetch = (page = 1, startFetch, abortFetch) => {
        try {
            this.searchRefresh(startFetch, abortFetch);
        } catch (err) {
            abortFetch();
        }
    };


    searchRefresh = (startFetch, abortFetch) => {
        startFetch(items, 6)

    };

    renderItem = (item, index) => {
        return <RenderItem item={item}/>
    };
}