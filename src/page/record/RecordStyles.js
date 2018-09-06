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
    barView: {
        height: 54,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemPage: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 17,
        paddingBottom: 17
    },
    itemView: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginLeft: 17,
        marginRight: 17
    },
    one: {
        flexDirection: 'row',
        marginBottom: 6
    },
    txt: {
        fontSize: 16,
        color: '#444444',
        fontWeight: 'bold'
    },
    time: {
        fontSize: 12,
        color: '#AAAAAA',
    },
    price: {
        color: '#444444',
        fontSize: 14
    },
    priceRed: {
        color: "#E54A2E",
        fontSize: 14
    },
    btnPage: {
        marginTop: 1,
        paddingTop: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 17,
        marginLeft: 17
    },
    btnView: {
        width: 80,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    obtainedView: {
        backgroundColor: 'white',
        borderWidth: 1
    },
    salingView: {
        backgroundColor: '#4A90E2',
        marginLeft: 16,
        borderWidth: 1,
        borderColor: '#4A90E2'
    },
    btn: {
        paddingTop: 14,
        marginLeft: 17,
        marginRight: 17
    },
    txt2: {
        color: "#FF8484",
        fontSize: 14
    },
    changePrice: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#E54A2E",
        marginRight: 17
    },
    obtainedView2: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#979797"
    }

})