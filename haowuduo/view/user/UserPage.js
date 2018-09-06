import React, {Component} from 'react';
import {View,Button,Image,Text,StyleSheet,Dimensions,ImageBackground,TouchableNativeFeedback} from 'react-native';
import {scaleSize} from '../../utils/ScreenUtil';

import {normalStyle} from '../NormalStyle';
import {getFetchNeverCached} from '../../http/ApiHelper'

const blackColor= "#282828";

var navigation = null;
let userInfo
export default class UserPage extends Component{

    constructor(props){
        super(props);
        navigation = this.props.navigation;
        this.state={
            userInfo:''
        }
    }
    componentDidMount(){
        getFetchNeverCached('account/getUserInfo',{phone: "18575683432"}).then(value=>{
            if(value.code==200){
                this.setState({userInfo:value.data})
            }
        })
    }
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 25, width: 25}}
                          source={require('../../images/tab_mine_select.png')}/>
                );
            }
            return (
                <Image style={{height: 25, width: 25}}
                          source={require('../../images/tab_mine_unselect.png')}/>
            );
        },
    };
    render (){
        return (
            <View style={userStyle.viewStyle}>
                <ImageBackground style={userStyle.topStyle} source={require('../../images/my_header_bg.png')}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:scaleSize(30),alignItems:'center',position:'relative'}}>
                        <View style={{flex:1}}></View>
                        <Text style={{flex:1,color:"#fff",fontSize:20,justifyContent:'center',textAlign:'center'}}>个人中心</Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableNativeFeedback onPress = {this.settingClick}>
                            <Image style={{width:scaleSize(34),height:scaleSize(34),marginRight:15}} source={require('../../images/ic_setting.png')}></Image>
                        </TouchableNativeFeedback>
                            <Image style={{width:scaleSize(34),height:scaleSize(34),marginRight:15}} source={require('../../images/home_info.png')}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30,paddingLeft:15,paddingRight:15,alignItems:'center'}}>
                        <TouchableNativeFeedback onPress={this.avatorClick }>
                            <Image style={{width:scaleSize(97),height:scaleSize(97)}} source={require('../../images/ic_devault_head.png') } ></Image>
                        </TouchableNativeFeedback>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color:'white'}}>{this.state.userInfo.phone}}</Text>
                            <Text style={{color:'white',marginTop:5,fontSize:10}}>{this.state.userInfo.nickName}</Text>
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
                <View style={{backgroundColor:'#fff',marginTop:scaleSize(30),paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:scaleSize(88),alignItems:'center'}}>
                        <Text style={normalStyle.blackText}>我的订单</Text>
                        <Text style={{color:'#C7C7C7'}}>查看全部 ></Text>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(150),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Image style={{width:scaleSize(42),height:scaleSize(40),alignSelf:'center'}} source={require('../../images/ic_order_all.png')}></Image>
                            <Text style={{color:blackColor,marginTop:scaleSize(5),alignSelf:'center'}}>全部</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Image style={{width:scaleSize(42),height:scaleSize(40),alignSelf:'center'}} source={require('../../images/ic_order_pay.png')}></Image>
                            <Text style={{color:blackColor,marginTop:scaleSize(5),alignSelf:'center'}}>已付款</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Image style={{width:scaleSize(42),height:scaleSize(40),alignSelf:'center'}} source={require('../../images/ic_order_completed.png')}></Image>
                            <Text style={{color:blackColor,marginTop:scaleSize(5),alignSelf:'center'}}>已完成</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Image style={{width:scaleSize(42),height:scaleSize(40),alignSelf:'center'}} source={require('../../images/ic_order_refund.png')}></Image>
                            <Text style={{color:blackColor,marginTop:scaleSize(5),alignSelf:'center'}}>退款</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    settingClick(){
        navigation.navigate('Setting');
    }
    avatorClick(params) {
        navigation.navigate("Login")
        console.log('您点击了头像...');
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