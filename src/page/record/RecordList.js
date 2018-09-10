import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableOpacity, Platform
} from 'react-native';
import {Colors, Images, Metrics} from '../../Themes';
import {UltimateFlatList} from '../../components';
import propTypes from 'prop-types';
import RenderItem from './RenderItem'
import {getRoomRequest} from "../../service/RecordDao";
import styles from "../hangout/HangoutStyles";
import ObtainedAction from '../hangout/ObtainedAction'
import {logMsg} from "../../config/utils";

export default class RecordList extends Component {

    static propTypes = {
        category: propTypes.object
    };

    componentDidMount() {
        this.type = this.props.category.type
    }

    refresh = () => {
        logMsg('刷新2')
        this.listView && this.listView.refresh();
    }

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

                <ObtainedAction
                    ref={ref => this.obtainedAction = ref}
                    refresh={this.props.refresh}/>
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
        getRoomRequest({
            page: 1,
            page_size: 20,
            request_type: this.props.category.type
        }, data => {
            console.log(`${this.props.category.type}_recordList`, data)
            startFetch(data.items, 18)
        }, err => {
            console.log('err', err)
            abortFetch()
        })

    };


    renderItem = (item, index) => {

        return <RenderItem item={item} id={this.props.category.id} type={'record'}
                           toggle={this.obtainedAction.toggle}/>
    };
}

