import React, {
    Component
} from 'react';
import {
    Text, Image, View, StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Images,Colors} from '../../Themes';
import {logMsg} from "../../config/utils";



export default class TabIcon extends Component {

    render() {
        const {tab, focused} = this.props;
        logMsg(this.props)
        return (
            <View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image style={this._imageStyle(tab)} source={this._imageTab(tab, focused)}/>
                    <Text style={[this._titleStyle(focused), {
                        fontSize: 10,
                        marginTop: 2
                    }]}>{this._title(tab)}</Text>
                </View>

            </View>
        );

    }

    _title = (tab) => {
        switch (tab) {
            case 'record':
                return '申请记录';
            case 'management':
                return '挂售管理';
            case 'me':
                return '个人';
        }

    };

    _titleStyle = (focused) => {
        return focused ? styles.textStyle2 : styles.textStyle;
    };

    _imageTab = (tab, focused) => {
        switch (tab) {
            case 'record':
                return focused ? Images.record2 : Images.record;
            case 'management':
                return focused ? Images.manage2 : Images.manage;
            case 'me':
                return focused ? Images.personal2 : Images.personal;
        }
    };

    _imageStyle = (tab) => {
        switch (tab) {
            case 'record':
                return styles.bgHomeStyle;
            case 'management':
                return styles.bgInformationStyle;
            case 'me':
                return styles.bgRankStyle2;
        }
    }
}

const styles = StyleSheet.create({

    textStyle: {
        color: '#AAAAAA'
    },
    textStyle2: {
        color: Colors._E54
    },
    discover: {
        height: 24,
        width: 21
    },
    bgInformationStyle: {
        width: 20,
        height: 18
    },
    bgRankStyle2: {
        height: 20,
        width: 20
    },
    bgHomeStyle: {
        height: 20,
        width: 16
    },
});
