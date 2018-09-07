/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import '../config/storage'
import {initApp} from "../service/AccountDao";


export default class App extends Component {

  constructor(props) {
    super(props)
    initApp()
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{
          backgroundColor: "#4388D9",
          paddingLeft: 45,
          paddingTop: 12,
          paddingBottom: 12,
          paddingRight: 45,
          borderRadius: 1
        }}
                          onPress={() => {
                            global.router.toLoginPage()
                          }}>
          <Text style={{color: "#FFFFFF", fontSize: 20}}>酒店房间挂售</Text>
        </TouchableOpacity>


        {/*<Button onPress={() => {*/}
        {/*router.toRegitser()*/}
        {/*}}>*/}

        {/*<Text>那妞2完r</Text>*/}
        {/*</Button>*/}

        {/*<Button/>*/}

        {/*<View style={{height: 44}}>*/}
        {/*<Input/>*/}
        {/*</View>*/}

        {/*<TouchableOpacity>*/}
        {/*<Text style={{color:"#444444",fontSize:20}}>加入澳门旅行翻倍赚大钱</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
