import React, { Component } from 'react';
import {Image,TextInput,View,Button,Text} from 'react-native';

import {scaleSize} from '../../utils/ScreenUtil';
import {normalStyle} from '../NormalStyle';

export default class ForgetPassword extends Component{
    render (){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{marginTop:scaleSize(60),paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/login_main_phone.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入手机号码'></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入验证码'></TextInput>
                            <View style={{height:scaleSize(48)}}>
                                <Button title='获取验证码'></Button>
                            </View>
                        </View>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='密码'></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='确认密码'></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{marginTop:scaleSize(60)}}>
                    <Button title='确定修改' onPress={()=>{
                        this.props.navigation.navigate('RegisterPassword');
                    }}></Button>
                    </View>
                </View>
            </View>
        )};
}