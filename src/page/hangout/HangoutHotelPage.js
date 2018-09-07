import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {isEmptyObject, convertDate} from '../../utils/ComonHelper';
import moment from 'moment';
import TimeSpecificationInfo from './TimeSpecificationInfo';

let time_index = 1;
let hotel_index = 1;

export default class HangoutHotelPage extends Component {

    state = {
        timeShow: false,
        date: {begin_date: "", end_date: "", counts: 0}
    }

    componentDidMount() {
        this.price = '';
        this.number = '';
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
        this.setState({
            timeShow: !this.state.timeShow
        })
    };

    render() {
        const {date} = this.state;
        return (
            <View style={styles.backgroundStyle2}>
                <ScrollView>
                    <View style={styles.messageView}>
                        <Text style={styles.massageTxt}>基本信息</Text>
                    </View>

                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>挂售酒店</Text>
                        <TouchableOpacity onPress={() => {
                            ++hotel_index;
                            router.toHotelListPage(this.state.date)
                        }}>
                            <Text style={styles.text2}>请选择挂售酒店</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>酒店房型</Text>
                        <Text style={styles.text2}>请选择酒店房型</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hangoutHotel_View}>
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
                            value={this.number + ''}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.number = txt
                            }}

                        />
                    </TouchableOpacity>
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
                </ScrollView>

                {this.state.timeShow ? <TimeSpecificationInfo
                    _change={this._change}
                    showSpecInfo={this.showSpecInfo}/> : null}
            </View>
        )
    }

    _change = (date) => {
        if (!isEmptyObject(date)) {
            this.setState({
                date: date
            })
        }
        console.log("第一次的时间：", this.state.date)
    };
}