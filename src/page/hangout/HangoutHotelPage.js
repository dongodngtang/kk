import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './HangoutStyles';
import {Colors, Images, Metrics} from '../../Themes';
import {CountDownButton, PopAction, Input} from "../../components";
import {isEmptyObject, convertDate, showToast, strNotNull, alertOrder} from '../../utils/ComonHelper';
import moment from 'moment';
import TimeSpecificationInfo from './TimeSpecificationInfo';
import {postRoom_requests} from "../../service/HangoutDao";
import {fileName, isEmpty, isStrNull, logMsg} from "../../config/utils";
import ImagePicker from 'react-native-image-crop-picker';
import {Styles} from "../../config/Theme";
import Loading from "../../components/Loading";

const option = {
    compressImageMaxWidth: 1024,
    compressImageMaxHeight: 1024,
    compressImageQuality: 0.6,
    mediaType: 'photo',
    multiple: false
};


export default class HangoutHotelPage extends Component {

    constructor(props) {
        super(props)
        props.navigation.setParams({
            onLeft: () => {
                logMsg('房间挂售申请退出，刷新申请挂售界面')
                props.params.refresh && props.params.refresh()
                router.pop()
            }

        })
    }

    selectImage = [{
        name: '拍照', onPress: () => {
            let setting = {
                // maxFiles: 10 - this.state.images.length,
                ...option
            }

            ImagePicker.openCamera(setting).then(image => {
                console.log(image)
                let item = {
                    source: {uri: image.path},
                    type: 'image'
                }
                this.state.images.unshift(item)
                this.setState({
                    images: [...this.state.images],
                    card_img: image.path
                })
                if (this.state.images.length > 10) {
                    showToast('图片最多上传9张')
                }
            });
        }
    },
        {
            name: '相册', onPress: () => {
                let setting = {
                    // maxFiles: 10 - this.state.images.length,
                    ...option
                }
                ImagePicker.openPicker(setting).then(image => {
                    logMsg(image)
                    // let selects = image.map(item => {
                    //     return {
                    //         source: {uri: item.path},
                    //         type: 'image'
                    //     }
                    // })
                    //
                    // this.state.images.unshift(...selects)
                    let item = {
                        source: {uri: image.path},
                        type: 'image'
                    }
                    this.state.images.unshift(item)
                    this.setState({
                        images: this.state.images,
                        card_img: image.path
                    })
                    if (this.state.images.length > 10) {
                        showToast('图片最多上传9张')
                    }
                });
            }
        }];


    state = {
        timeShow: false,
        date: {begin_date: "", end_date: "", counts: 0},
        hotel_item: {},
        room_item: {},
        card_img: '',
        images: [{
            type: 'plus',
            source: Images.room_card_add
        }]
    }

    componentDidMount() {
        this.price = '';
        this.room_num = '';
        // this.init();
    }

    init = () => {
        this.setState({
            date: {
                begin_date: moment().format('YYYY-MM-DD'),
                end_date: moment().add('hours', 24).format('YYYY-MM-DD'),
                counts: 1
            }
        })
    };

    showSpecInfo = (temp) => {

        this.setState({
            timeShow: !this.state.timeShow
        })
    };

    _change_hotel = (item) => {

        this.setState({
            hotel_item: item
        })
    };

    _change_room = (item) => {
        this.setState({
            room_item: item
        })
    };

    render() {
        const {date, hotel_item, room_item} = this.state;
        return (
            <View style={styles.backgroundStyle}>
                <ScrollView>
                    <View style={styles.messageView}>
                        <Text style={styles.massageTxt}>基本信息</Text>
                    </View>
                    <View style={{width: Metrics.screenWidth, height: 8, backgroundColor: '#F3F3F3'}}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>挂售酒店</Text>
                        <TouchableOpacity onPress={() => {

                            router.toHotelListPage(this.state.date, this._change_hotel)
                        }}
                                          style={{paddingRight: 100}}>
                            {isEmpty(hotel_item) ? <Text style={styles.text2}>请选择挂售酒店</Text> :
                                <Text style={styles.timeTxt}>{hotel_item.title}</Text>}

                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: Metrics.screenWidth,
                        height: 1,
                        backgroundColor: '#F3F3F3',
                        alignSelf: 'center'
                    }}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>酒店房型</Text>
                        <TouchableOpacity onPress={() => {
                            if (isEmptyObject(hotel_item)) {
                                showToast("请先选择酒店")
                            } else {
                                router.toHotelRoomListPage(hotel_item, this._change_room);
                            }

                        }}
                                          style={{paddingRight: 100}}>
                            {isEmpty(room_item) ? <Text style={styles.text2}>请选择酒店房型</Text> :
                                <Text style={styles.timeTxt}>{room_item.title}</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: Metrics.screenWidth,
                        height: 1,
                        backgroundColor: '#F3F3F3',
                        alignSelf: 'center'
                    }}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>房号</Text>
                        <TextInput
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                width: 300,
                                fontSize: 14,
                                marginLeft: 40
                            }}
                            maxLength={11}
                            numberOfLines={1}
                            placeholderTextColor={'#CCCCCC'}
                            placeholder={'请填写酒店房号'}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.room_num = txt
                            }}

                        />
                    </View>
                    <View style={{
                        width: Metrics.screenWidth,
                        height: 1,
                        backgroundColor: '#F3F3F3',
                        alignSelf: 'center'
                    }}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>入住时间</Text>
                        <TouchableOpacity onPress={() => {

                            this.showSpecInfo()
                        }}
                                          style={{paddingRight: 100}}>
                            {isStrNull(date.begin_date) ? <Text style={styles.text2}>请填写入住时间</Text> :

                                <Text
                                    style={styles.timeTxt}>{`${convertDate(date.begin_date, 'M月DD日')} - ${convertDate(date.end_date, 'M月DD日')}`}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: Metrics.screenWidth,
                        height: 1,
                        backgroundColor: '#F3F3F3',
                        alignSelf: 'center'
                    }}/>
                    <View style={styles.hangoutHotel_View}>
                        <Text style={styles.text1}>挂售金额</Text>
                        <TextInput
                            keyboardType={'numeric'}
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                width: 300,
                                fontSize: 14,
                                marginLeft: 40,
                                paddingLeft: 0
                            }}
                            maxLength={11}
                            numberOfLines={1}
                            placeholderTextColor={'#CCCCCC'}
                            placeholder={'请填写挂售金额'}
                            clearTextOnFocus={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={txt => {
                                this.price = txt
                            }}

                        />
                    </View>
                    <View style={{
                        width: Metrics.screenWidth,
                        height: 20,
                        backgroundColor: '#F3F3F3',
                        alignSelf: 'center'
                    }}/>
                    <View style={[styles.hangoutHotel_View]}>
                        <Text style={styles.text1}>房卡</Text>

                        <View>
                            <View style={styles.card_imgs}>
                                {this.select_images()}
                            </View>
                            <Text style={styles.photoTxt}>需清晰展示您挂售酒店名称与房间编号</Text>
                        </View>

                    </View>

                    <View style={styles.promptView}>
                        <View style={{
                            width: Metrics.screenWidth - 40,
                            height: 1,
                            backgroundColor: "#DDDDDD",
                            alignSelf: 'center'
                        }}/>
                        <Text style={styles.promptTxt}>提示：房间出售成功后平台将会抽取价格的10%的服务费</Text>
                    </View>


                    <TouchableOpacity style={styles.hangout_btnView} onPress={() => {
                        this.judgeMessage()
                    }}>
                        <Text style={styles.hangout_btnTxt}>准备好了，申请挂售</Text>
                    </TouchableOpacity>
                </ScrollView>

                {this.state.timeShow ? <TimeSpecificationInfo
                    _change={this._change}
                    showSpecInfo={this.showSpecInfo}/> : null}

                <PopAction
                    btnArray={this.selectImage}
                    ref={ref => this.popAction = ref}
                />

                <Loading ref={ref => this.loading = ref}/>


            </View>
        )
    }

    select_images = () => {
        let {images} = this.state;

        let views = images.map((item, index, arr) => {
            let view = null;
            if (item.type === 'plus' && index < 1) {
                view = <TouchableOpacity
                    key={'moment' + index}
                    onPress={() => {
                        this.popAction && this.popAction.toggle()
                    }}
                    style={styles.pick_image}>
                    <Image style={styles.pick_image}
                           source={item.source}/>
                </TouchableOpacity>

            } else if (item.type === 'image' && index < 1) {
                view = <View
                    key={'moment' + index}
                    onPress={() => {

                    }}
                    style={styles.pick_image}>

                    <TouchableOpacity style={styles.btn_del} onPress={() => {
                        alertOrder("确认删除？", () => {
                            images.shift()
                            this.setState({
                                images
                            })

                        })
                    }}>
                        <Text style={{color: '#747474', fontSize: 10}}>删除</Text>
                    </TouchableOpacity>

                    <Image
                        key={'moment' + index}
                        source={item.source}
                        style={styles.pick_image}/>
                </View>
            }

            item.view = view;
            return view;

        });

        return views;
    }

    judgeMessage = () => {

        const {date, hotel_item, room_item, card_img} = this.state;
        if (isEmptyObject(hotel_item) || isEmptyObject(room_item) || !strNotNull(this.room_num) || !strNotNull(this.price) || isEmptyObject(date)) {
            showToast("请填写完整信息")
            return;
        } else if (!strNotNull(card_img)) {
            showToast("请上传房卡图片")
            return;
        }else if(date.counts > 1){
            showToast("时间选择不能超过一天")
            return;
        }
        let body = {
            hotel_id: hotel_item.id,
            room_id: room_item.id,
            room_num: this.room_num,
            checkin_date: date.begin_date,
            price: this.price,
        };

        let formData = new FormData();
        let file = {
            uri: card_img,
            name: fileName(card_img),
            type: 'image/jpeg'
        };
        formData.append('card_img', file);
        formData.append('price', this.price)
        formData.append('checkin_date', date.begin_date)
        formData.append('room_num', this.room_num)
        formData.append('room_id', room_item.id)
        formData.append('hotel_id', hotel_item.id)


        alertOrder("确认挂售？", () => {
            this.loading && this.loading.open()
            postRoom_requests(formData, data => {
                this.loading && this.loading.close()
                logMsg('挂售成功', data)
                showToast("挂售成功");
                this.props.params.refresh && this.props.params.refresh()
                router.pop();

            }, err => {
                this.loading && this.loading.close()
                showToast(err)
            })
        });
    };

    _change = (date) => {
        if (!isEmptyObject(date)) {
            this.setState({
                date: date
            })
        }
        console.log("第一次的时间：", this.state.date)
    };
}