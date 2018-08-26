import React, { Component } from 'react';
import {View,Image,TextInput,Text,Button,TouchableNativeFeedback} from 'react-native';
import {normalStyle} from '../NormalStyle';
import {scaleSize} from '../../utils/ScreenUtil';

export default class Login extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:scaleSize(30),marginRight:scaleSize(30)}}>
                    <TouchableNativeFeedback onPress={()=>{
                        this.props.navigation.goBack();
                    }}><Image style={{width:scaleSize(30),height:scaleSize(30)}} source={require('../../images/login_close.png')}></Image></TouchableNativeFeedback>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:scaleSize(30)}}>
                    <Image style={{width:scaleSize(250),height:scaleSize(250)}} source={require('../../images/login_logo.png')}></Image>
                </View>
                <View style={{marginTop:scaleSize(60),paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/login_main_phone.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入手机号码'></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入密码'></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{marginTop:scaleSize(60)}}>
                        <Button title='登录' onPress={()=>{

                        }}>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:scaleSize(20)}}>
                        <TouchableNativeFeedback onPress={()=>{
                            this.props.navigation.navigate('ForgetPassword');
                        }}>
                            <Text>忘记密码？</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress = {()=>{
                            this.props.navigation.navigate('Register');
                        }}><Text>免费注册</Text></TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        );
    };
}
