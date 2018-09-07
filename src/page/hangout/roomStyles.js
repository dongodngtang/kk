import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes'

export default StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 20,
        backgroundColor: "#FFFFFF"
    },
    messageView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 17
    },
    message: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8
    },
    message1: {
        backgroundColor: '#F3F3F3',
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    txt: {
        color: '#888888',
        fontSize: 10
    },
    txt2: {
        color: "#4A90E2",
        fontSize: 12
    },
    priceView: {
        flexDirection: 'column',
        marginRight: 17,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    reservation: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FF6448',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#FF4726"
    },
    counts: {
        width: 22,
        height: 11,
        backgroundColor: "#000000",
        borderRadius: 2,
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        marginBottom: 1
    }
})