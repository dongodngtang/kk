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
    incomeView:{
        flexDirection:'column',
        backgroundColor:'white',
        paddingTop:26,
        paddingBottom:24,
        paddingLeft:17,
        paddingRight:17
    },
    incomeTxt: {
        color: "#444444",
        fontSize: 14,
        fontWeight: 'bold',
        marginRight:16
    },
    money:{
        color: "#E54A2E",
        fontSize: 20
    },
    withdrawView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    withdraw:{
        color: "#666666",
        fontSize: 14
    },
    money3:{
        color: "#4A90E2",
        fontSize: 14
    },
    applicationView:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingLeft:17,
        paddingRight:17,
        marginTop:6,
        backgroundColor:'white'
    },
    application_withdraw:{
        color:"#333333",
        fontSize:14
    },
    countTxt:{
        color: "#AAAAAA",
        fontSize: 14
    }
})