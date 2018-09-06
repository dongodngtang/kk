import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {isEmptyObject} from '../../utils/ComonHelper';
import moment from 'moment';

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
        return (
            <ScrollView style={styles.backgroundStyle2}>
                <View style={styles.messageView}>
                    <Text style={styles.massageTxt}>基本信息</Text>
                </View>

                <TouchableOpacity style={styles.hangoutHotel_View}>
                    <Text style={styles.text1}>挂售酒店</Text>
                    <Text style={styles.text2}>请选择挂售酒店</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hangoutHotel_View}>
                    <Text style={styles.text1}>酒店房型</Text>
                    <Text style={styles.text2}>请选择酒店房型</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hangoutHotel_View}>
                    <Text style={styles.text1}>房号</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            width: 230,
                            fontSize: 14,
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
                <TouchableOpacity style={styles.hangoutHotel_View}
                                  onPress={() => {
                                      this.showSpecInfo()
                                  }}>
                    <Text style={styles.text1}>入住时间</Text>
                    <Text style={styles.text2}>请填写克入住时间</Text>
                </TouchableOpacity>
                <View style={styles.hangoutHotel_View}>
                    <Text style={styles.text1}>挂售金额</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            width: 230,
                            fontSize: 14,
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

                {this.state.timeShow ? <TimeSpecificationInfo
                    _change={this._change}
                    showSpecInfo={this.showSpecInfo}/> : null}
            </ScrollView>
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