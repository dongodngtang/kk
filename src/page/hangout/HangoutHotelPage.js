import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {isEmptyObject, convertDate, showToast, strNotNull,alertOrder} from '../../utils/ComonHelper';
import moment from 'moment';
import TimeSpecificationInfo from './TimeSpecificationInfo';
import {postRoom_requests} from "../../service/HangoutDao";

let time_index = 1;
let hotel_index = 1;
let room_index = 1;

export default class HangoutHotelPage extends Component {

    constructor(props) {
        super(props)
        props.navigation.setParams({
            onLeft: () => {
                props.params.refresh && props.params.refresh()
                router.pop()
            }

        })
    }


    state = {
        timeShow: false,
        date: {begin_date: "", end_date: "", counts: 0},
        hotel_item: {},
        room_item: {},
        card_img: ''
    }

    componentDidMount() {
        this.price = '';
        this.room_num = '';
        this.init();
    }

    init = () => {
        this.setState({
            date: {
                begin_date: moment().format('YYYY-MM-DD'),
                end_date: moment().add('hours', 24).format('YYYY-MM-DD'),
                counts: 1
            }
        })
    };

    showSpecInfo = (temp) => {
        if (temp === '取消') {
            time_index = 1
        }
        this.setState({
            timeShow: !this.state.timeShow
        })
    };

    _change_hotel = (item) => {
        if (isEmptyObject(item)) {
            hotel_index = 1;
        }
        this.setState({
            hotel_item: item
        })
    };

    _change_room = (item) => {
        if (isEmptyObject(item)) {
            room_index = 1;
        }
        this.setState({
            room_item: item
        })
    };

    render() {
        const {date, hotel_item, room_item} = this.state;
        return (
            <View style={styles.backgroundStyle}>
                <ScrollView>
                    <View style={styles.messageView}>
                        <Text style={styles.massageTxt}>基本信息</Text>
                    </View>
                    <View style={{width:Metrics.screenWidth,height:8,backgroundColor:'#F3F3F3'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>挂售酒店</Text>
                        <TouchableOpacity onPress={() => {
                            ++hotel_index;
                            router.toHotelListPage(this.state.date, this._change_hotel)
                        }}>
                            {hotel_index === 1 ? <Text style={styles.text2}>请选择挂售酒店</Text> :
                                <Text style={styles.timeTxt}>{hotel_item.title}</Text>}

                        </TouchableOpacity>
                    </View>
                    <View style={{width:Metrics.screenWidth,height:1,backgroundColor:'#F3F3F3',alignSelf:'center'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>酒店房型</Text>
                        <TouchableOpacity onPress={() => {
                            if (isEmptyObject(hotel_item)) {
                                showToast("请先选择酒店")
                            } else {
                                ++room_index;
                                router.toHotelRoomListPage(hotel_item, this._change_room);
                            }

                        }}>
                            {room_index === 1 ? <Text style={styles.text2}>请选择酒店房型</Text> :
                                <Text style={styles.timeTxt}>{room_item.title}</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={{width:Metrics.screenWidth,height:1,backgroundColor:'#F3F3F3',alignSelf:'center'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>房号</Text>
                        <TextInput
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                width: 230,
                                fontSize: 16,
                                marginLeft: 40
                            }}
                            maxLength={11}
                            numberOfLines={1}
                            placeholderTextColor={'#CCCCCC'}
                            placeholder={'请填写酒店房号'}
                            value={this.room_num + ''}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.room_num = txt
                            }}

                        />
                    </View>
                    <View style={{width:Metrics.screenWidth,height:1,backgroundColor:'#F3F3F3',alignSelf:'center'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>入住时间</Text>
                        <TouchableOpacity onPress={() => {
                            ++time_index;
                            this.showSpecInfo()
                        }}>
                            {time_index === 1 ? <Text style={styles.text2}>请填写入住时间</Text> :

                                <Text
                                    style={styles.timeTxt}>{`${convertDate(date.begin_date, 'M月DD日')} - ${convertDate(date.end_date, 'M月DD日')}`}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{width:Metrics.screenWidth,height:1,backgroundColor:'#F3F3F3',alignSelf:'center'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>挂售金额</Text>
                        <TextInput
                            keyboardType={'numeric'}
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                width: 230,
                                fontSize: 16,
                                marginLeft: 40
                            }}
                            maxLength={11}
                            numberOfLines={1}
                            placeholderTextColor={'#CCCCCC'}
                            placeholder={'请填写挂售金额'}
                            value={this.price + ''}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.price = txt
                            }}

                        />
                    </View>
                    <View style={{width:Metrics.screenWidth,height:20,backgroundColor:'#F3F3F3',alignSelf:'center'}}/>
                    <View style={[styles.hangoutHotel_View]}>
                        <Text style={styles.text1}>房卡</Text>
                        <TouchableOpacity>

                        </TouchableOpacity>
                        <Text style={styles.photoTxt}>需清晰展示您挂售酒店名称与房间编号</Text>
                    </View>

                    <View style={styles.promptView}>
                        <View style={{width:Metrics.screenWidth - 40,height:1,backgroundColor:"#DDDDDD",alignSelf:'center'}}/>
                        <Text  style={styles.promptTxt}>提示：房间出售成功后平台将会抽取价格的10%的服务费</Text>
                    </View>
                </ScrollView>

                {this.state.timeShow ? <TimeSpecificationInfo
                    _change={this._change}
                    showSpecInfo={this.showSpecInfo}/> : null}

                <TouchableOpacity style={styles.hangout_btnView} onPress={() => {
                    this.judgeMessage()
                }}>
                    <Text style={styles.hangout_btnTxt}>准备好了，申请挂售</Text>
                </TouchableOpacity>
            </View>
        )
    }

    judgeMessage = () => {
        const {date, hotel_item, room_item, card_img} = this.state;
        if (isEmptyObject(hotel_item) || isEmptyObject(room_item) || !strNotNull(this.room_num) || !strNotNull(this.price) || isEmptyObject(date)) {
            showToast("请填写完整信息")
            return;
        }else if(!strNotNull(card_img)) {
            showToast("请上传房卡图片")
            return;
        }
        let body = {
            hotel_id: hotel_item.id,
            room_id: room_item.id,
            room_num: this.room_num,
            checkin_date: date.begin_date,
            price: this.price,
            card_img: 'http://kkh5.deshpro.com/images/default_img.png'
        };

        alertOrder("确认挂售？", () => {
            postRoom_requests(body, data => {
                showToast("申请成功");
                router.pop();
            }, err => {
                showToast(err)
            })
        });
    };

    _change = (date) => {
        if (!isEmptyObject(date)) {
            this.setState({
                date: date
            })
        }
        console.log("第一次的时间：", this.state.date)
    };
}