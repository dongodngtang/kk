import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import RenderItem from '../record/RenderItem'
import {strNotNull} from "../../utils/ComonHelper";

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

    state = {
        visible: false,
        clickArea: false,
        index: 1
    };

    componentDidMount() {
        this.price = ''
    };


    clickBtn = () => {
        if (this.state.index === 1) {
            return (
                <TouchableOpacity style={{
                    width: Metrics.screenWidth - 34,
                    height: 200,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
                                  activeOpacity={1}
                                  onPress={() => {

                                  }}>
                    <View style={styles.roomView}>
                        <Text style={styles.roomTxt}>修改房间价格</Text>
                    </View>

                    <View style={styles.changeView}>
                        <TextInput
                            keyboardType={'numeric'}
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                width: 230,
                                height: 40,
                                fontSize: 14
                            }}
                            maxLength={11}
                            numberOfLines={1}
                            placeholderTextColor={'#DDDDDD'}
                            placeholder={'输入修改房间价格'}
                            value={this.price + ''}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.price = txt
                            }}

                        />
                    </View>

                    <View style={styles.priceBtnView}>
                        <TouchableOpacity style={[styles.priceBtn, styles.confirmBtn]}
                                          onPress={() => {
                                              this.toggle && this.toggle(1);
                                          }}>
                            <Text style={styles.confirmTxt}>确定</Text>
                        </TouchableOpacity>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity style={[styles.priceBtn, styles.cancelBtn]}
                                          onPress={() => {
                                              this.toggle && this.toggle(1);
                                          }}>
                            <Text style={styles.cancelTxt}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={{
                    width: Metrics.screenWidth - 34,
                    height: 200,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
                                  activeOpacity={1}
                                  onPress={() => {

                                  }}>
                    <Text style={styles.obtainedTxt}>房间下架后，记录将会被删除</Text>
                    <Text style={[styles.obtainedTxt,{marginTop:2}]}>请问是否下架？</Text>

                    <View style={styles.priceBtnView}>
                        <TouchableOpacity style={[styles.priceBtn, styles.confirmBtn]}
                                          onPress={() => {
                                              this.toggle && this.toggle(2);
                                          }}>
                            <Text style={styles.confirmTxt}>确定</Text>
                        </TouchableOpacity>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity style={[styles.priceBtn, styles.cancelBtn]}
                                          onPress={() => {
                                              this.toggle && this.toggle(2);
                                          }}>
                            <Text style={styles.cancelTxt}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        }
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


                {this.state.visible ? <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        position: 'absolute',
                        height: Metrics.screenHeight - 55,
                        width: Metrics.screenWidth,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        this.toggle(0)
                    }}>

                    {this.clickBtn()}

                </TouchableOpacity> : null}


            </View>

        )
    };

    toggle = (index) => {
        this.setState({
            visible: !this.state.visible,
            index: index
        })
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
        return <RenderItem item={item} type={'hangout'} toggle={this.toggle}/>
    };
}