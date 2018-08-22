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
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:15,alignItems:'center'}}>
                        <Text style={{color:"#fff"}}>个人中心</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <Image style={{width:15,height:15,marginRight:15}} source={require('./images/ic_setting.png')}></Image>
                            <Image style={{width:15,height:15,marginRight:15}} source={require('./images/home_info.png')}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30,paddingLeft:15,paddingRight:15,alignItems:'center'}}>
                        <Image style={{justifyContent:'center',width:75,height:75}} source={require('./images/ic_devault_head.png')} ></Image>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color:'white'}}>185****3432</Text>
                            <Text style={{color:'white',marginTop:5,fontSize:10}}>ID:50554996</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <Text style={{color:'white',fontSize:20}}>0.00</Text>
                            <Text style={{color:'white',fontSize:12}}>账户余额 ></Text>
                        </View>
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