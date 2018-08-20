import React, {Component} from 'react';
import {Button,Image} from 'react-native';

export default class Category extends Component{
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '分类',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 20, width: 20}}
                          source={require('./images/tab_type_select.png')}/>
                );
            }
            return (
                <Image style={{height: 20, width: 20}}
                          source={require('./images/tab_type_unselect.png')}/>
            );
        },
    };
    render (){
        return (
            <Button onPress={() => {

              }}
              title="点击跳转"/>
        );
    }
}