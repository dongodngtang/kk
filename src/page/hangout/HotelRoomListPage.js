import React, {PureComponent} from 'react';
import {
    StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, Modal
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../Themes';
import {convertDate, isEmptyObject, strNotNull} from "../../utils/ComonHelper";
import {getRoomList} from "../../service/HangoutDao";
import RoomBar from './RoomBar';
import {ImageLoad, UltimateListView} from "../../components";
import moment from "moment/moment";
import styles from './roomStyles';
import {LoadErrorView, NoDataView} from '../../components/load';

export default class HotelRoomListPage extends PureComponent {

    state = {
        last_change_time: moment().format('YYYY-MM-DD')
    };

    componentDidMount() {

    }

    render() {
        const {hotel, date} = this.props.params;
        return (<View style={styles.backgroundStyle2}>
                <RoomBar/>

                <UltimateListView
                    header={() => <View style={{height: 6}}/>}
                    ListHeaderComponent={this._separator}
                    separator={this._separator}
                    keyExtractor={(item, index) => index + "item"}
                    ref={(ref) => this.listView = ref}
                    onFetch={this.onFetch}
                    item={this._renderItem}
                    refreshableTitlePull={'下拉刷新'}
                    refreshableTitleRelease={'释放刷新'}
                    dateTitle={'最后刷新'}
                    allLoadedText={'已经没有啦！'}
                    waitingSpinnerText={'加载中...'}
                    emptyView={() => <NoDataView/>}
                />

            </View>
        )
    };

    onFetch = (page = 1, startFetch, abortFetch) => {
        try {
            getRoomList({
                page,
                page_size: 20,
                begin_date: this.state.last_change_time,
                id: this.props.params.hotel_item.id
            }, data => {
                console.log("RoomList:", data)
                startFetch(data.items, 18)
            }, err => {
                abortFetch()
            })
        } catch (err) {
            console.log(err)
            abortFetch()
        }
    };

    _discount = (price, discount_amount) => {
        if (strNotNull(discount_amount)) {
            if(discount_amount>price){
                return price;
            }else{
                return price - discount_amount
            }
        }else{
            return price
        }
    }

    _renderItem = (item, index) => {
        const {id, images, notes, price, tags, title, discount_amount} = item;
        return (
            <TouchableOpacity style={styles.itemView} onPress={()=>{
                this.props.params._change_room(item)
            }}>
                <ImageMessage images={images}/>
                <Message item={item}/>

                <View style={styles.priceView}>
                    <Text style={{color: "#FF3F3F", fontSize: 20}}><Text
                        style={{color: "#FF3F3F", fontSize: 12}}>¥</Text>{this._discount(price, discount_amount)}</Text>


                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Text style={{color: "#AAAAAA", fontSize: 12, marginRight: 4}}>原价</Text>
                        <Text
                            style={{color: "#AAAAAA", fontSize: 12, textDecorationLine: 'line-through'}}>¥{price}</Text>
                    </View>


                    <TouchableOpacity
                        style={[styles.reservation, {backgroundColor: item.saleable_num <= 0 ? '#F3F3F3' : '#FF6448'}]}
                        onPress={() => {
                            if (item.saleable_num > 0) {
                                if (isEmptyObject(global.login_user)) {
                                    router.toLoginFirstPage()
                                } else
                                    router.toRoomReservationPage(item, this.state.last_change_time)
                            }
                        }}>
                        <Text style={{
                            color: item.saleable_num <= 0 ? '#888888' : "#FFFFFF",
                            fontSize: 14
                        }}>{item.saleable_num <= 0 ? '售罄' : '预定'}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    };

    _separator = () => {
        return (
            <View style={{width: '100%', height: 5, backgroundColor: '#ECECEE'}}/>
        )
    }


}

export class ImageMessage extends PureComponent {

    previewImage = (images) => {
        let gallery = images.map(item => {
            return {url: item.replace('!sm', '')}
        })
        global.router.toImageGalleryPage(gallery, 0)
    };

    render() {
        const {images} = this.props;

        return (
            <TouchableOpacity
                onPress={() => {
                    this.previewImage(images)
                }}
            >
                <ImageBackground
                    emptyBg={Images.crowd_banner}
                    style={{
                        width: 68,
                        height: 68,
                        marginLeft: 12,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}
                    source={{uri: images[0]}}>
                    <View style={styles.counts}>
                        <Text style={{color: '#FFFFFF', fontSize: 9}}>{images.length}张</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        )
    }
}

export class Message extends PureComponent {
    _breakfast = (notes) => {
        return (
            <View style={{flexDirection: 'row', marginTop: 8}}>
                {notes.map((note, index) => {
                    return <Text key={index} style={[styles.txt2, {marginRight: 10}]}>{note}</Text>
                })}
            </View>
        )
    };
    _message = (tags) => {
        return (
            <View style={styles.message}>
                {tags.map((tag, index) => {
                    return <View key={index} style={[styles.message1, {marginRight: 6}]}>
                        <Text style={styles.txt}>{tag}</Text>
                    </View>
                })}

            </View>
        )
    };

    render() {
        const {item} = this.props;
        const {notes, title, tags} = item;
        return (
            <View style={styles.messageView}>
                <Text style={{color: "#161718", fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
                {!isEmptyObject(item.tags) ? this._message(tags) :
                    <Text style={{color: '#CCCCCC', fontSize: 12, marginTop: 6}}>暂无房型信息</Text>}

                {!isEmptyObject(notes) ? this._breakfast(notes) : null}
            </View>

        )
    }
}
