import React, {Component} from 'react'
import {Router} from 'react-native-router-flux'
import {Scenes} from './config/Scenes'
import Route from './config/Router'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component{

    componentWillMount() {
        this.router = this.router || new Route();
        global.router = this.router;
        global.loginUser = null;

    }

    componentDidMount() {

        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide()

    }

    render() {
        return   <Router>
            {Scenes()}
        </Router>
    }
}