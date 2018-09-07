/**
 * Created by lorne on 2017/3/8.
 */
import React, {Component} from 'react';
import {
    TouchableOpacity, View, TextInput,
    StyleSheet, Image, Text
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../Themes';
import {BtnLong} from '../../components'

export default class NoNetWorkView extends Component {


    render() {
        return (<View
            testID="view_net_work"
            style={{flex:1,backgroundColor:'#F3F3F3'}}>

            <View style={{
                alignItems: 'center', justifyContent: 'center',
                marginTop: 139
            }}>
                <Image style={{height: 70, width: 70}}
                       source={Images.load_wifi}/>

                <Text style={[Fonts.H18, {
                    color: Colors._AAA,
                    marginTop: 11
                }]}>{'网络异常，请检查您的网络'}</Text>
                <BtnLong
                    name={'重新加载'}
                    testID="btn_retry"
                    onPress={() => {
                        if (this.props.onPress !== undefined)
                            this.props.onPress();
                    }}
                    style={{
                        backgroundColor: Colors._161817,
                        height: 40, width: 172, marginTop: 37, justifyContent: 'center'
                    }}
                    textStyle={[Fonts.H17, {color: Colors.txt_E4D}]}/>


            </View>


        </View>)
    }
}