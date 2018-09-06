import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './RecordStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {isEmptyObject, logMsg} from "../../config/utils";


export default class ItemBottom extends Component {

    render() {
        return (
            <View style={styles.btnPage}>
                <TouchableOpacity style={[styles.btnView,styles.obtainedView]}>
                    <Text style={{fontSize:14,color:"#444444"}}>下架</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnView,styles.salingView]}>
                    <Text style={{fontSize:14,color:"#FFFFFF"}}>出售中</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

