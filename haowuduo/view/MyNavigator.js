import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';

import Splash from './splash'
import Main from './Main';
import Login from './user/login';
import ForgetPassword from './user/ForgetPassword';
import Register from './user/register';
import RegisterPassword from './user/RegisterPassword';
import DetailPage from './home/DetailPage';     // 详情页
import Setting from './user/setting';
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
        RegisterPassword:{
            screen:RegisterPassword,
        },
        Login:{
            screen:Login,
            navigationOptions:({navigation}) => ({
                header:null
            })
        },
        ForgetPassword:{
            screen:ForgetPassword,
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
        Setting:{
            screen:Setting,
            navigationOptions:({navigation})=>({
                headerTitle: '设置',
            })
        }
    },
    {
        initialRouteName: 'Splash', // 默认先加载的页面组件
        mode: 'modal',       // 定义跳转风格(card、modal)
        header:null,  
    });
export default MyNavigator;