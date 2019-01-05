/**
 *作者：lorne
 *时间：2019/1/4
 *功能：
 */

import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {QRCodeScanner,Loading} from '../../components'
import {logMsg, showToast} from "../../config/utils";
import {postOrderVerification} from "../../service/RecordDao";

class ScanPage extends PureComponent {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <QRCodeScanner onRead={this.onSuccess} finderY={50}/>
            <Loading ref={ref=>this.loading=ref}/>
            </View>
        );
    }

    onSuccess = (res) => {
        showToast('扫码成功...')
        this.loading && this.loading.open()
        postOrderVerification(res.data,ret=>{
            this.loading && this.loading.close()

            alert(JSON.stringify(ret))

        },err=>{
            this.loading && this.loading.close()
            let str = `加载失败${JSON.stringify(err)}`
            alert(str)
        })
    }
}


export default ScanPage;