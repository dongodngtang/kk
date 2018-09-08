import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Modal, Text} from 'react-native';
import {Images, Colors} from '../config/Theme';



export default class PopAction extends Component {

    state = {
        visible: false
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }




    btnArrayView = () => {

        const {btnArray} = this.props;
        if(btnArray)
            return btnArray.map((item, index) => {
                return this.btn(item)
            })
    }


    btn =(item)=>{
        return <TouchableOpacity
            onPress={() => {
                this.toggle()
                setTimeout(()=>{
                    item.onPress && item.onPress()
                },100)


            }}
            activeOpacity={1}
            key={'action' + item.name}
            style={{
                height: 50,
                backgroundColor: 'white',
                borderBottomColor: Colors._ECE,
                borderBottomWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>

            <Text style={[{fontSize: 16}, item.txtStyle]}>{item.name}</Text>

        </TouchableOpacity>
    }

    render() {
        let btnCancel = {name:'取消',txtStyle:{color:'red'}}
        return (<Modal
            transparent={true}
            visible={this.state.visible}
            onRequestClose={() => {
            }}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.toggle} style={{flex: 1}}/>
                {this.btnArrayView()}
                {this.btn(btnCancel)}

            </View>

        </Modal>)
    }
}