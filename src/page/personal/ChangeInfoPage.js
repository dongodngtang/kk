import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './PersonalStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import {UltimateFlatList} from '../../components';
import {get_thousand_num} from '../../utils/ComonHelper'

export default class ChangeInfoPage extends Component {

    state = {}

    componentDidMount() {
        this.name = '';
        this.phone = ''
    }

    render() {
        return (
            <View style={styles.backgroundStyle2}>
                <View style={[styles.applicationView, {marginTop: 5}]}>
                    <Text style={styles.application_withdraw}>姓名：</Text>

                    <TextInput
                        style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            width: 230,
                            fontSize: 14
                        }}
                        maxLength={11}
                        numberOfLines={1}
                        placeholderTextColor={'#DDDDDD'}
                        placeholder={'请输入修改后的姓名'}
                        value={this.name + ''}
                        clearTextOnFocus={true}
                        underlineColorAndroid={'transparent'}
                        onChangeText={txt => {
                            this.name = txt
                        }}

                    />

                </View>

                <View style={[styles.applicationView, {marginTop: 1}]}>
                    <Text style={styles.application_withdraw}>电话：</Text>

                    <TextInput
                        keyboardType={'numeric'}
                        style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            width: 230,
                            fontSize: 14
                        }}
                        maxLength={11}
                        numberOfLines={1}
                        placeholderTextColor={'#DDDDDD'}
                        placeholder={'输入修改手机号'}
                        value={this.phone + ''}
                        clearTextOnFocus={true}
                        underlineColorAndroid={'transparent'}
                        onChangeText={txt => {
                            this.phone = txt
                        }}

                    />
                </View>

            </View>
        )
    }
}