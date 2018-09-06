import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './RecordStyles';
import ItemBottom from './ItemBottom';

export default class RenderItem extends Component {

    judgeBtn = () => {
        const {id} = this.props;
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

    _hangoutBtn = () => {
        return (
            <View style={styles.btnPage}>
                <TouchableOpacity style={[styles.btnView, styles.changePrice]}>
                    <Text style={{fontSize: 14, color: "#E54A2E"}}>修改价格</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnView, styles.obtainedView2]}>
                    <Text style={{fontSize: 14, color: "#444444"}}>下架</Text>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        const {title, time, price, start_time, end_time, contact, phone} = this.props.item;
        return (
            <View style={styles.itemPage}>
                <TouchableOpacity
                    style={[styles.itemView, {
                        borderBottomWidth: this.props.type === 'hangout' || (this.props.id && this.props.id) !== 1 ? 1 : 0,
                        borderColor: '#F3F3F3',
                        paddingBottom: this.props.id && this.props.id === 1 ? 0 : 16
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

                {this.props.type === 'record' ? this.judgeBtn() : this._hangoutBtn()}

            </View>


        )
    }
}
