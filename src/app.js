import React, {Component} from 'react'
import {Router} from 'react-native-router-flux'
import {Scenes} from './config/Scenes'
import Route from './config/Router'


export default class App extends Component{

    componentWillMount() {
        this.router = this.router || new Route();
        global.router = this.router;
        global.loginUser = null;

    };

    render() {
        return   <Router>
            {Scenes()}
        </Router>
    }
}