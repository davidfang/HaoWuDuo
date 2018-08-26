import React, { Component } from 'react';
import {Image,TextInput,View,Button,Text} from 'react-native';

import {scaleSize} from '../../utils/ScreenUtil';
import {normalStyle} from '../NormalStyle';

export default class Register extends Component{
    static navigationOptions={
        title:'注册'
    }
    render (){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{marginTop:scaleSize(60),paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/login_main_phone.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='昵称'></TextInput>
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
                    <Button title='确定' onPress={()=>{

                    }}></Button>
                    </View>
                </View>
            </View>
        )};
}
