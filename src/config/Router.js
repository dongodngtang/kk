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


    toRegisterPage(){
        this.push({
            name:'Register'
        })
    }

    toRegisterPageTwo(){
        this.push({
            name:'RegisterPageTwo'
        })
    }

    toRegisterPageThree() {
        this.push({
            name: 'RegisterPageThree'
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


}