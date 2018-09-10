import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import RenderItem from '../record/RenderItem'
import {strNotNull} from "../../utils/ComonHelper";
import {getRoomRequest} from "../../service/RecordDao";
import {logMsg} from "../../config/utils";
import ObtainedAction from './ObtainedAction';

export default class HangoutManagementPage extends Component {

    constructor(props) {
        super(props)

        props.navigation.setParams({
            onRight: () => router.toHangoutHotelPage(this.refresh),
            rightTitle: '挂售'
        })
    }

    state = {
        clickArea: false
    };

    refresh = () => {
        this.listView.refresh && this.listView.refresh()
    }

    componentDidMount() {
        this.price = ''
    };


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
                    emptyView={() => <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text
                        style={{color: '#F3F3F3', fontSize: 15}}>暂无信息</Text></View>}
                />

                <ObtainedAction
                    ref={ref => this.obtainedAction = ref}
                    refresh={this.props.refresh}/>

            </View>

        )
    };

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
        getRoomRequest({
            page: 1,
            page_size: 20,
            request_type: 'on_offer'
        }, data => {
            console.log(`on_offer_recordList`, data)
            startFetch(data.items, 18)
        }, err => {
            console.log('err', err)
            abortFetch()
        })

    };

    renderItem = (item, index) => {
        return <RenderItem item={item} type={'hangout'} toggle={this.obtainedAction.toggle}/>
    };
}