import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Modal,KeyboardAvoidingView} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {postCancelRoom, putChangePrice} from "../../service/RecordDao";
import {alertOrder, showToast} from "../../utils/ComonHelper";
import {logMsg} from "../../config/utils";


export default class ObtainedAction extends Component {

    state = {
        visible: false,
        change_type: '',
        id: ''
    };

    toggle = (type, id) => {
        logMsg('toggle 操作1')
        this.setState({
            visible: !this.state.visible,
            change_type: type,
            id: id
        })
    };

    componentDidMount() {
        this.price = ''
    };


    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => {
                }}>
                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.toggle} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        {this.btnArrayView()}
                    </TouchableOpacity>


                </View>
            </Modal>
        )


    }

    btnArrayView = () => {
        const {change_type, id} = this.state;
        console.log("弹窗", this.state);
        if (change_type === 'change_price') {
            return <KeyboardAvoidingView style={{
                width: Metrics.screenWidth - 34,
                height: 200,
                alignItems: 'center',
                backgroundColor: 'white'
            }}
                                     activeOpacity={1}
                                     onPress={() => {

                                     }}>
                <View style={styles.roomView}>
                    <Text style={styles.roomTxt}>修改房间价格</Text>
                </View>

                <View style={styles.changeView}>
                    <TextInput
                        keyboardType={'numeric'}
                        style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            width: 230,
                            height: 40,
                            fontSize: 14
                        }}
                        maxLength={11}
                        numberOfLines={1}
                        placeholderTextColor={'#DDDDDD'}
                        placeholder={'输入修改房间价格'}
                        value={this.price + ''}
                        clearTextOnFocus={true}
                        underlineColorAndroid={'transparent'}
                        onChangeText={txt => {
                            this.price = txt
                        }}

                    />
                </View>

                <View style={styles.priceBtnView}>
                    <TouchableOpacity style={[styles.priceBtn, styles.confirmBtn]}
                                      onPress={() => {
                                          putChangePrice({id: this.state.id, price: this.price}, data => {
                                              showToast("修改价格成功");
                                              this.toggle && this.toggle('change_price');
                                              logMsg('toggle 操作2')
                                              this.props.refresh && this.props.refresh();
                                          }, err => {

                                          })
                                          this.price = ''
                                      }}>
                        <Text style={styles.confirmTxt}>确定</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity style={[styles.priceBtn, styles.cancelBtn]}
                                      onPress={() => {
                                          this.toggle && this.toggle('change_price');
                                          this.price = ''
                                      }}>
                        <Text style={styles.cancelTxt}>取消</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        } else if (change_type === 'obtained') {
            return (
                <TouchableOpacity style={{
                    width: Metrics.screenWidth - 34,
                    height: 200,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
                                  activeOpacity={1}
                                  onPress={() => {

                                  }}>
                    <Text style={styles.obtainedTxt}>房间下架后，记录将会被删除</Text>
                    <Text style={[styles.obtainedTxt, {marginTop: 2}]}>请问是否下架？</Text>

                    <View style={styles.priceBtnView}>
                        <TouchableOpacity style={[styles.priceBtn, styles.confirmBtn]}
                                          onPress={() => {
                                              postCancelRoom({id: this.state.id}, data => {
                                                  showToast("下架成功");
                                                  this.toggle && this.toggle('obtained');
                                                  logMsg('toggle 操作2')
                                                  this.props.refresh && this.props.refresh();
                                              }, err => {

                                              })
                                          }}>
                            <Text style={styles.confirmTxt}>确定</Text>
                        </TouchableOpacity>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity style={[styles.priceBtn, styles.cancelBtn]}
                                          onPress={() => {
                                              this.toggle && this.toggle();
                                          }}>
                            <Text style={styles.cancelTxt}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        }
    }
}