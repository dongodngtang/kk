/**
 * Button.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/21.
 *
 */

import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native'

type Props = {
    btnStyle: any,
    children?: any,
    title?: string,
    onPress: func
}

class Button extends Component<Props> {
    render() {
        const {title, children, btnStyle, onPress,txtStyle} = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[{
                    height: 40, width: '30%', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: '#06c8d0'
                }, btnStyle]}>
                {children ? children :
                    <Text style={[{fontSize: 14, color: 'white'},txtStyle]}>{title ? title : '按钮'}</Text>}


            </TouchableOpacity>
        );
    }
}


export default Button;
