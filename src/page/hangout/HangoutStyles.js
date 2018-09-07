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
        width:Metrics.screenWidth - 34,
        height: 50,
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
    },
    obtainedTxt:{
        marginTop:34,
        marginLeft:36,
        marginRight:36,
        color:"#444444",
        fontSize:18,
        fontWeight:'bold'
    },

    messageView:{
        paddingTop:12,
        paddingBottom:12,
        backgroundColor:"#DDDDDD"
    },
    massageTxt:{
        color: "#444444",
        fontSize: 14,
        marginLeft:17,
        marginRight:17,
        fontWeight:'bold'
    },
    hangoutHotel_View:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:15,
        paddingBottom:15,
        marginBottom:1
    },
    text1:{
        color: "#444444",
        fontSize: 14,
        width:70
    },
    text2:{
        color: "#CCCCCC",
        fontSize: 14,
        marginLeft:40
    },
    timeView:{
        flexDirection: 'row',
        alignItems: 'center',
        width:70
    },
    timeTxt:{
        color: "#444444",
        fontSize: 16,
        marginLeft:40
    },


    selectView: {
        backgroundColor: 'white',
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-start",
        backgroundColor: "white",
        paddingTop: 17,
        paddingBottom: 17
    },
    message: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        marginTop: 7,
        marginRight: 22
    },
    name: {
        color: '#161718',
        fontSize: 18,
        fontWeight: 'bold'
    },
    stars: {
        width: 14,
        height: 14,
        marginRight: 4
    },
    starView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 9
    },
    location: {
        color: '#999999',
        fontSize: 12,
        marginTop: 8
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 3
    },
    price: {
        color: '#FF3F3F',
        fontSize: 20
    },
    view: {
        width: 48,
        height: 18,
        borderWidth: 1,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    hangout_btnView:{
        width:Metrics.screenWidth - 34,
        alignSelf:'center',
        position:'absolute',
        paddingTop:16,
        paddingBottom:16,
        bottom:20,
        backgroundColor:'#E54A2E',
        alignItems:'center',
        justifyContent:'center'
    },
    hangout_btnTxt:{
        color: '#FFFFFF',
        fontSize: 14
    }
})