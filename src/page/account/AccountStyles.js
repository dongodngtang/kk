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
    areaView: {
        marginTop: 3,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 17,
        paddingRight: 17,
        backgroundColor: 'white',
        flexDirection: 'row', alignItems: 'center'
    },
    input_view: {
        borderBottomColor: Colors._E5E5,
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: Metrics.screenWidth,
        backgroundColor: 'white'
    },
    input: {
        height: 50,
        color: Colors.txt_666,
        fontSize: 14, flex: 1, alignSelf: 'center',
        marginLeft: 20
    },
    down_txt: {
        fontSize: 15,
        color: 'white'
    },
    btn_down: {
        backgroundColor: Colors.txt_FF3
    },
    registerTxt: {
        color: "#444444",
        fontSize: 18,
        marginTop: 22,
        marginLeft: 17,
        marginBottom: 24
    },
    nextBtn: {
        marginTop:38,
        marginLeft:17,
        marginRight:17,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E54A2E',
        borderRadius:2
    },
    nextTxt:{
        fontSize: 18,
        color: 'white'
    },
    loginBtn:{
        marginLeft:17,
        marginTop:24
    },
    loginTxt:{
        color:'#666666',
        fontSize:12
    },
    sendCodeView:{
        marginBottom:2,
        marginTop:8,
        marginLeft: 17,
        marginRight:17
    },
    registerTxt2:{
        color: "#666666",
        fontSize: 12,

    },
    nameTxt:{
        color:'#444444',
        fontSize:14,
        marginLeft:17
    }

})