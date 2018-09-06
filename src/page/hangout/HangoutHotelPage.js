import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {get_thousand_num} from '../../utils/ComonHelper'

export default class HangoutHotelPage extends Component {

    componentDidMount() {
        this.price = '';
        this.number = ''
    }

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
                            marginLeft:40
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
                <TouchableOpacity style={styles.hangoutHotel_View}>
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
                            marginLeft:40
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
        )
    }
}