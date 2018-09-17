import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './PersonalStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {get_thousand_num} from '../../utils/ComonHelper'
import {getRoomRequest} from "../../service/RecordDao";

export default class PersonalPage extends Component {

    state = {
        sold_count: 0
    }

    componentDidMount() {
        getRoomRequest({
            page: 1,
            page_size: 20,
            request_type: 'sold'
        }, data => {
            this.setState({
                sold_count: data.items.length
            })
            console.log(`sold_count`, data)
        }, err => {
            console.log('err', err)
        })
    }

    render() {
        return (
            <View style={styles.backgroundStyle2}>
                <View style={styles.incomeView}>
                    <Text style={styles.incomeTxt}>累计收益 <Text
                        style={styles.money}>{get_thousand_num(1000)}元</Text></Text>

                    <View style={styles.withdrawView}>
                        <Text style={styles.withdraw}>已提现 <Text>{get_thousand_num(10000000)}元</Text></Text>
                        <Text style={[styles.withdraw, {marginLeft: 56}]}>可提现 <Text
                            style={styles.money3}>{get_thousand_num(10000000)}元</Text></Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.applicationView} onPress={() => {
                    router.toSellInfoPage()
                }}>
                    <Text style={styles.application_withdraw}>申请提现</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.countTxt}>{this.state.sold_count}间</Text>
                    <Image style={{width: 6, height: 15, marginLeft: 12}} source={Images.right}/>
                </TouchableOpacity>
            </View>

        )
    }
}