/**
 *作者：lorne
 *时间：2019/1/4
 *功能：
 */

import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {QRCodeScanner} from '../../components'

class ScanPage extends PureComponent {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <QRCodeScanner onRead={this.onSuccess} finderY={50}/>
            </View>
        );
    }

    onSuccess = (data) => {
        console.log(data)
        alert(data.data)
    }
}


export default ScanPage;