import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './RecordStyles';
import ItemBottom from './ItemBottom';
import {Images, Styles, Metrics, Colors} from '../../config/Theme'
import {alertOrder, showToast, utcDate} from '../../utils/ComonHelper';
import {postWithdrawals} from '../../service/AccountDao'

export default class RenderItem extends Component {

    recordBtn = (item) => {
        const {id} = this.props;
        if (id === 2) {
            return (
                <View style={styles.btn}>
                    <Text style={styles.txt2}>原因：{item.refused_memo}</Text>
                </View>
            )
        } else if (id === 3) {
            return (
                <ItemBottom item={item} toggle={this.props.toggle}/>
            )
        }
    };

    judgeBtn = (item) => {
        const {type} = this.props;
        if (type === 'record') {
            return this.recordBtn(item)
        } else if (type === 'hangout') {
            return this._hangoutBtn(item)
        } else if (type === 'sell') {
            return this.sellBtn(item)
        }
    };


    _hangoutBtn = (item) => {
        const {id} = this.props.item;
        return (
            <View style={styles.btnPage}>
                <TouchableOpacity style={[styles.btnView, styles.changePrice]}
                                  onPress={() => {
                                      this.props.toggle && this.props.toggle('change_price', id);
                                  }}>
                    <Text style={{fontSize: 14, color: "#E54A2E"}}>修改价格</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnView, styles.obtainedView2]}
                                  onPress={() => {
                                      this.props.toggle && this.props.toggle('obtained', id);
                                  }}>
                    <Text style={{fontSize: 14, color: "#444444"}}>下架</Text>
                </TouchableOpacity>
            </View>
        )
    };

    sellBtn = (item) => {
        return (
            <View style={styles.btnPage}>
                <TouchableOpacity style={[styles.btnView, styles.withdrawPrice]}
                                  onPress={() => {
                                      alertOrder("确认提现？", postWithdrawals({request_id: item.id}, data => {
                                            showToast("提现成功")
                                      }))
                                  }}>
                    <Text style={{fontSize: 14, color: "#FFFFFF"}}>申请提现</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnView, styles.sellsuccess]}
                                  activeOpacity={1}>
                    <Text style={{fontSize: 14, color: "#FFFFFF"}}>出售成功</Text>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        const {item} = this.props;
        const {hotel_title, created_at, price, room_title, checkin_date} = this.props.item;
        return (
            <View style={styles.itemPage}>
                <TouchableOpacity
                    style={[styles.itemView, {
                        borderBottomWidth: this.props.type === 'hangout' || (this.props.id && this.props.id) !== 1 ? 1 : 0,
                        borderColor: '#F3F3F3',
                        paddingBottom: this.props.id && this.props.id === 1 ? 0 : 16
                    }]}>

                    <View style={[styles.one]}>
                        <Text style={[styles.txt, {width: '70%'}]}>{hotel_title} {room_title}</Text>
                        <View style={{flex: 1}}/>
                        <Text style={styles.time}>{utcDate(created_at, 'YYYY-MM-DD HH:mm')}</Text>
                    </View>
                    <Text style={[styles.price, {marginBottom: 6, fontWeight: 'bold'}]}>售价：<Text
                        style={styles.priceRed}>¥{price}</Text></Text>
                    <Text style={[styles.price, {marginBottom: 12}]}>{`入住时间：${checkin_date}`}</Text>
                    <Text style={styles.price}>{`联系人：${global.loginUser.nick_name} ${global.loginUser.contact}`}</Text>
                </TouchableOpacity>


                {this.judgeBtn(item)}

            </View>


        )
    }
}
