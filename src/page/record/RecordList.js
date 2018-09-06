import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableOpacity, Platform
} from 'react-native';
import {Colors, Images, Metrics} from '../../Themes';
import {UltimateFlatList} from '../../components';
import propTypes from 'prop-types';
import {isEmptyObject} from '../../utils/ComonHelper';
import styles from './RecordStyles';
import ItemBottom from "./ItemBottom";

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
    },
    {
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
    },
    {
        title: '巴黎人酒店 豪华双人房1天',
        time: '2018-8-12 13:23',
        price: '2999',
        start_time: '',
        end_time: '',
        contact: 'hhh',
        phone: '13640988285'
    }]

export default class RecordList extends Component {

    static propTypes = {
        category: propTypes.object
    };

    render() {
        return <UltimateFlatList
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

    judgeBtn = () => {
        const {id} = this.props.category;
        if (id === 2) {
            return (
                <View style={styles.btn}>
                    <Text style={styles.txt2}>原因：您的房间信息核对失败</Text>
                </View>
            )
        } else if (id === 3) {
            return (
                <ItemBottom/>
            )
        }
    };

    renderItem = (item, index) => {
        const {title, time, price, start_time, end_time, contact, phone} = item;
        return <View style={styles.itemPage}>
            <TouchableOpacity
                style={[styles.itemView, {
                    borderWidth: this.props.category.id !== 1 ? 1 : 0,
                    borderColor: '#F3F3F3',
                    paddingBottom: this.props.category.id === 1 ? 0 : 16
                }]}>
                <View style={styles.one}>
                    <Text style={styles.txt}>{title}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={[styles.price, {marginBottom: 6, fontWeight: 'bold'}]}>售价：<Text
                    style={styles.priceRed}>¥{price}</Text></Text>
                <Text style={[styles.price, {marginBottom: 12}]}>{`挂售时间：${start_time}至${end_time}`}</Text>
                <Text style={styles.price}>{`联系人：${contact} ${phone}`}</Text>
            </TouchableOpacity>

            {this.judgeBtn()}

        </View>
    };
}

