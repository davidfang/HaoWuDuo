import React, {Component} from 'react';
import {View,Button,Image,Text,StyleSheet,Dimensions,ImageBackground} from 'react-native';

export default class UserPage extends Component{
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 20, width: 20}}
                          source={require('./images/tab_mine_select.png')}/>
                );
            }
            return (
                <Image style={{height: 20, width: 20}}
                          source={require('./images/tab_mine_unselect.png')}/>
            );
        },
    };
    render (){
        return (
            <View style={userStyle.viewStyle}>
        
            </View>
        );
    }
}
const userStyle = StyleSheet.create({
    viewStyle:{
        flex:1,
        flexDirection: 'column',
    }
});