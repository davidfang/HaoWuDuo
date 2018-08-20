import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';

import Splash from './splash'
import Main from './Main';
import DetailPage from './DetailPage';     // 详情页
// 注册tabs


const MyNavigator =  StackNavigator({
        Splash:{
            screen:Splash,
            navigationOptions: ({navigation}) => ({
                header:null
            })
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