import {ActionConst, Actions} from 'react-native-router-flux';

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


    toHangoutHotelPage(){
        this.push({
            name: 'HangoutHotelPage'
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



}