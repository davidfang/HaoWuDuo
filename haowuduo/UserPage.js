import React, {Component} from 'react';
import {View,Button,Image,Text,StyleSheet,Dimensions,ImageBackground} from 'react-native';

export default class UserPage extends Component{
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 25, width: 25}}
                          source={require('./images/tab_mine_select.png')}/>
                );
            }
            return (
                <Image style={{height: 25, width: 25}}
                          source={require('./images/tab_mine_unselect.png')}/>
            );
        },
    };
    render (){
        return (
            <View style={userStyle.viewStyle}>
                <ImageBackground style={userStyle.topStyle} source={require('./images/my_header_bg.png')}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
                        <Text style={{justifyContent:'center',color:"#fff"}}>个人中心</Text>
                        <Image style={{width:15,height:15,marginRight:15}} source={require('./images/ic_setting.png')}></Image>
                        <Image style={{width:15,height:15,marginRight:15}} source={require('./images/home_info.png')}></Image>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const userStyle = StyleSheet.create({
    viewStyle:{
        flex:1,
        flexDirection: 'column',
    },
    topStyle:{
        width:Dimensions.get('window').width,
        height:224,
    },
    titleStyle:{
        
    }
});