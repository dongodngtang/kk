import React, {PureComponent} from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableOpacity, Platform,
    StatusBar, TextInput
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../Themes';
import {convertDate} from '../../utils/ComonHelper'


export default class SearchBar extends PureComponent {
    state = {
        show_search: false
    }

    render() {
        return (<View style={styles.navBar}>

            <View style={styles.navContent}>
                <TouchableOpacity
                    onPress={() => {
                        global.router.pop();
                    }}
                    style={{
                        height: 40, width: 50,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                    <Image style={{height: 19, width: 10}}
                           source={Images.sign_return}/>
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                {this.state.show_search  ? <View
                        style={styles.search}>
                        <Image style={styles.searchImg}
                               source={Images.search}/>

                        <TextInput
                            onChangeText={text => {
                                this.props.onChangeText && this.props.onChangeText(text)
                            }}
                            placeholderTextColor={'white'}
                            placeholder={'地名／酒店'}
                            underlineColorAndroid={'transparent'}
                            style={{height: 40, fontSize: 14, color: 'white', flex: 1}}/>
                    </View> :
                    <View style={{width: '67%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: "#FFFFFF", fontSize: 18}}>
                            {'选择酒店'}
                        </Text>
                    </View>}
                <View style={{flex: 1}}/>

                {this.state.show_search ?
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            show_search: false
                        })
                    }}>
                        <Text style={{fontSize: 14, color: 'white'}}>取消</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({
                            show_search: true
                        })
                    }}>
                        <Image style={styles.searchImg}
                               source={Images.search}/>
                    </TouchableOpacity>
                }
            </View>

        </View>)

    }

}

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 10
    },
    navBar: {
        height: Metrics.navBarHeight,
        width: '100%',
        paddingTop: Metrics.statusBarHeight,
        backgroundColor: '#E54A2E'
    },
    navContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        marginRight: 12
    },
    search: {
        height: 28,
        width: '67%',
        backgroundColor: "#CD3A1F",
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchImg: {
        height: 17,
        width: 17,
        marginLeft: 15,
        marginRight: 9
    },
    txtSearch: {
        color: Colors._AAA,
        fontSize: 12
    },
    btnCat: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44
    },
    imgCat: {
        height: 20,
        width: 22
    },
    badge: {
        position: 'absolute',
        top: 5,
        right: '26%'
    },
    timView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 9
    }

});