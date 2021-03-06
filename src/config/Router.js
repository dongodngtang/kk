import {ActionConst, Actions} from 'react-native-router-flux';
import SwitchBase from "../page/personal/SwitchBase";
import ScanPage from "../page/personal/ScanPage";

export default class Router {


    push(route) {

        Actions.push(route.name, {params: route.params})
        console.log('当前界面类名：' + Actions.currentScene)
    }

    replace(route) {
        Actions.replace(route.name, {params: route.params})
    }


    pop() {
        Actions.pop();

    }

    popTo(route) {
        Actions.popTo(
            route.name,
            {params: route.params}
        )
    }

    toScanPage(){
        this.push({name:'ScanPage'})
    }

    popToTopRefresh() {
        this.push({name: 'Navigation'})
    }

    toNavigation(){
        this.push({
            name:'Navigation'
        })
    }

    toRegisterPage(){
        this.push({
            name:'Register'
        })
    }

    toRegisterPageTwo(mobile,ext){
        this.push({
            name:'RegisterPageTwo',
            params:{
                mobile,ext
            }
        })
    }

    toRegisterPageThree(params) {
        this.push({
            name: 'RegisterPageThree',
            params
        })
    }

    toLoginPage(){
        this.push({
            name:'Login'
        })
    }

    toApplicationRecordPage() {
        this.push({
            name: 'ApplicationRecordPage'
        })
    }

    toSellInfoPage(){
        this.push({
            name: 'SellInfoPage'
        })
    }


    toSettingPage(){
        this.push({
            name: 'SettingPage'
        })
    }

    toSwitchBase(){
        this.push({
          name:'SwitchBase'
        })
    }


    toHangoutHotelPage(refresh){
        this.push({
            name: 'HangoutHotelPage',
            params:{
                refresh
            }
        })
    }


    toHotelListPage(date,_change_hotel){
        this.push({
            name: 'HotelListPage',
            params:{
                date,
                _change_hotel
            }
        })
    }


    toHotelRoomListPage(hotel_item,_change_room){
        this.push({
            name: 'HotelRoomListPage',
            params:{
                hotel_item,
                _change_room
            }
        })
    }


  popToTop() {
    this.popTo({name: 'Home'})
  }


  toChangeInfoPage(refresh) {
    this.push({
      name: 'ChangeInfoPage',
      params: {refresh}
    })
  }

    toBusinessPage() {
        this.push({

            name: 'BusinessPage',
        })
    }

}