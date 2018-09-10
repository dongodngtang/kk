import React, {Component, PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './RecordStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, Button, Input} from "../../components";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {isEmptyObject, logMsg} from "../../config/utils";
import RecordList from './RecordList';

const categories = [{id: 1, name: '审核中', type: 'pending'}, {id: 2, name: '未通过', type: 'refused'}, {
    id: 3,
    name: '已通过',
    type: 'passed'
}];

export default class ApplicationRecordPage extends Component {

    constructor(props) {
        super(props)

        props.navigation.setParams({
            onRight: () => router.toHangoutHotelPage(this.refresh),
            rightTitle: '申请挂售'
        })
    }

    refresh = ()=>{
        logMsg('刷新1',this)
        this.recordListpending && this.recordListpending.refresh();

    }
    render() {
        logMsg('申请记录',this)
        return (
            <View style={styles.backgroundStyle2}>

                <ScrollableTabView
                    renderTabBar={() => <TabNav/>}>


                    {categories.map((item, key) => {
                        logMsg(item)

                        return <RecordList
                            ref={ref=> this[`recordList${item.type}`] = ref}
                            tabLabel={item.name}
                            category={item}
                            key={`record${key}`}
                        />
                    })}


                </ScrollableTabView>
            </View>

        )
    }
}

class TabNav extends PureComponent {

    render() {
        const {goToPage, activeTab, tabs} = this.props;
        return <View style={{
            paddingTop: 20, paddingBottom: 12,
            flexWrap: 'wrap',
            width: Metrics.screenWidth,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            {tabs && tabs.map((name, page, index) => {
                return <TouchableOpacity
                    key={`${name}${index}`}
                    onPress={() => goToPage && goToPage(page)}
                    style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{
                        fontSize: 14,
                        color: activeTab === page ? '#F34A4A' : Colors.txt_444,

                    }}>{name}</Text>
                    <View style={{height: 6}}/>
                    {activeTab === page ? <View style={{
                        width: 46,
                        height: 1.5,
                        backgroundColor: '#F34A4A',
                    }}/> : null}

                </TouchableOpacity>
            })}

        </View>
    }

}