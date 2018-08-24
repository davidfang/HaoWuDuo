import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';

import Splash from './splash'
import Main from './Main';
import Login from './login';
import Register from './register';
import DetailPage from './home/DetailPage';     // 详情页
// 注册tabs


const MyNavigator =  StackNavigator({
        Splash:{
            screen:Splash,
            navigationOptions: ({navigation}) => ({
                header:null
            })
        },  
        Register:{
            screen:Register,
        },
        Login:{
            screen:Login,
        },
        Main: {
            screen: Main,
            navigationOptions: ({navigation}) => ({
                header:null
            })
        },
        DetailsPage: { // 详情页
            screen: DetailPage,
        },
    },
    {
        initialRouteName: 'Splash', // 默认先加载的页面组件
        mode: 'modal',       // 定义跳转风格(card、modal)
        header:null,  
    });
export default MyNavigator;