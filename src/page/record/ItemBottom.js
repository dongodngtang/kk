import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './RecordStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {isEmptyObject, logMsg} from "../../config/utils";
import {alertOrder, showToast} from "../../utils/ComonHelper";
import {postCancelRoom} from '../../service/RecordDao';


export default class ItemBottom extends Component {

    render() {
        const {is_sold, is_withdrawn, id} = this.props.item;
        return (
            <View style={styles.btnPage}>
                {!is_sold && !is_withdrawn ?
                    <TouchableOpacity style={[styles.btnView, styles.obtainedView]}
                                      onPress={() => {

                                          this.props.toggle &&  this.props.toggle('obtained',id)
                                      }}>
                        <Text style={{fontSize: 14, color: "#444444"}}>下架</Text>
                    </TouchableOpacity> : null}

                <View style={[styles.btnView, styles.salingView, this.judgeColor()]}>
                    <Text style={{fontSize: 14, color: "#FFFFFF"}}>{this.judgeItem()}</Text>
                </View>
            </View>

        )
    }

    judgeColor = () => {
        const {is_sold, is_withdrawn} = this.props.item;
        if (is_sold) {
            return {backgroundColor: '#FFBBBB'}
        } else if (is_withdrawn) {
            return {backgroundColor: '#DDDDDD'}
        } else {
            return {backgroundColor: '#4A90E2'}
        }
    }

    judgeItem = () => {
        const {is_sold, is_withdrawn} = this.props.item;
        if (is_sold) {
            return "出售成功"
        } else if (is_withdrawn) {
            return "已过期"
        } else {
            return "出售中"
        }
    }
}

