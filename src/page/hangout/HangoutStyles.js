import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes'

export default StyleSheet.create({
    containerColumn: {
        alignItems: 'center', justifyContent: 'center'
    },
    containerRow: {
        flexDirection: 'row', alignItems: 'center'
    },
    backgroundStyle: {
        flex: 1, backgroundColor: 'white'
    },
    backgroundStyle2: {
        flex: 1, backgroundColor: '#F3F3F3'
    },
    roomView: {
        height: 50,
        width: 340,
        backgroundColor: "#E54A2E",
        alignItems: 'center',
        justifyContent: 'center'
    },
    roomTxt: {
        color: "#FFFFFF",
        fontSize: 14
    },
    changeView: {
        marginTop: 30,
        marginLeft: 26,
        marginRight: 26,
        borderBottomWidth: 1,
        borderBottomColor: "#DDDDDD"
    },
    priceBtnView: {
        flex:1,
        marginTop: 30,
        marginLeft: 52,
        marginRight: 52,
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceBtn: {
        width: 94,
        height: 34,
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2
    },
    confirmBtn:{
        borderColor:'#E54A2E'
    },
    cancelBtn:{
        borderColor:'#666666'
    },
    confirmTxt:{
        color: "#E54A2E",
        fontSize: 14
    },
    cancelTxt:{
        color: "#666666",
        fontSize: 14
    }
})