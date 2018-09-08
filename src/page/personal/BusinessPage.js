/**
 * Created by lorne on 2017/3/8.
 */
import React, {Component} from 'react';
import {
    TouchableOpacity, View, TextInput, Alert,
    StyleSheet, Image, Text, ScrollView, Platform
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../Themes';
import {call} from '../../utils/ComonHelper';
import {getContacts} from "../../service/AccountDao";
import styles from './PersonalStyles'

export default class BusinessPage extends Component {

    state = {
        contacts: {}
    }


    componentDidMount() {
        getContacts(data => {
            console.log("contacts",data)
            this.setState({
                contacts: data
            })
        }, err => {
        })
    }

    render() {
        const {contacts} = this.state;
        return (<View
            testID="page_business"
            style={styles.backgroundStyle2}>

            <View style={{backgroundColor: Colors.setting, height: 50, flexDirection:'row',alignItems: 'center'}}>
                <Text style={[Fonts.H17, {
                    marginLeft: 17,
                    marginRight: 17,
                    color: '#333333',
                    fontSize: 16
                }]}>商务合作</Text>
                <View style={{flex:1}}/>
                <Text
                    style={[Fonts.H16, {
                        marginLeft: 17,
                        marginRight: 17,
                        color: Colors._AAA,
                        fontSize: 16
                    }]}
                    selectable={true}>{contacts.email}</Text>
            </View>
            <TouchableOpacity
                style={{backgroundColor: Colors.setting,marginTop: 1,  height: 50, flexDirection:'row',alignItems: 'center'}}
                onPress={() => {
                    call(contacts.mobile)
                }}>
                <Text style={[Fonts.H17, {
                    marginLeft: 17,
                    marginRight: 17,
                    color: '#333333',
                    fontSize: 16
                }]}>联系电话</Text>
                <View style={{flex:1}}/>
                <Text style={[Fonts.H16, {
                    marginLeft: 17,
                    marginRight: 17,
                    color: Colors._AAA,
                    fontSize: 16
                }]}
                    selectable={true}>{contacts.mobile}</Text>
            </TouchableOpacity>

        </View>)
    }


}