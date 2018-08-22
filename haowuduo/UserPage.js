import React, {Component} from 'react';
import {View,Button,Image,Text,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import {scaleSize} from './utils/ScreenUtil'

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
        console.log("宽度="+Dimensions.get('window').width+";高度="+Dimensions.get('window').height);
        console.log("宽度="+Dimensions.get('screen').width+";高度="+Dimensions.get('screen').height);
        return (
            <View style={userStyle.viewStyle}>
                <ImageBackground style={userStyle.topStyle} source={require('./images/my_header_bg.png')}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:30,alignItems:'center'}}>
                        <Text style={{color:"#fff",fontSize:20}}>个人中心</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <Image style={{width:scaleSize(34),height:scaleSize(34),marginRight:15}} source={require('./images/ic_setting.png')}></Image>
                            <Image style={{width:scaleSize(34),height:scaleSize(34),marginRight:15}} source={require('./images/home_info.png')}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30,paddingLeft:15,paddingRight:15,alignItems:'center'}}>
                        <Image style={{width:scaleSize(97),height:scaleSize(97)}} source={require('./images/ic_devault_head.png')} ></Image>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color:'white'}}>185****3432</Text>
                            <Text style={{color:'white',marginTop:5,fontSize:10}}>ID:50554996</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
                            <Text style={{color:'white',fontSize:25,alignSelf:'flex-end'}}>0.00</Text>
                            <Text style={{color:'white',fontSize:12,alignSelf:'flex-end'}}>账户余额 ></Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',height:scaleSize(150)}}>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{color:'red',fontSize:20,alignSelf:'center'}}>0</Text>
                        <Text style={{color:'black',fontSize:14,alignSelf:'center'}}>累计收益(元)</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>
                        <Text style={{color:'red',fontSize:20,alignSelf:'center'}}>0</Text>
                        <Text style={{color:'black',fontSize:14,alignSelf:'center'}}>即将到账(元)</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>
                        <Text style={{color:'red',fontSize:20,alignSelf:'center'}}>0</Text>
                        <Text style={{color:'black',fontSize:14,alignSelf:'center'}}>我的积分(个)</Text>
                    </View>
                </View>
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
        height:scaleSize(322),
        backgroundColor:'white'
    },
    titleStyle:{
        
    }
});