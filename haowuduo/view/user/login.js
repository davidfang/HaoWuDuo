import React, { Component } from 'react';
import {View,Image,TextInput,Text,Button,TouchableNativeFeedback} from 'react-native';
import {normalStyle} from '../NormalStyle';
import {scaleSize} from '../../utils/ScreenUtil';

import {post} from '../../http/ApiHelper';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Login extends Component{

    constructor(props){
        super(props);
        this.userTextChange=this.userTextChange.bind(this);
        this.passwordTextChange = this.passwordTextChange.bind(this);

        this.state={
            phone:'',
            password:''
        }
    }
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
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入手机号码' textContentType='telephoneNumber' maxLength={11} 
                         onChangeText={this.userTextChange }></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入密码' textContentType='password' onChangeText={
                           this.passwordTextChange  }></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{marginTop:scaleSize(60)}}>
                        <Button title='登录' onPress={()=>{
                            this.login();
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
                <Toast ref="toast" position='center'/>
            </View>
        );
    };
    userTextChange(userData){
        console.log('the userData is '+ userData)
        this.setState({phone:userData});
    }
    passwordTextChange(password){
        this.setState({password:password})
    }
    login(){
        console.log('the phone is '+ this.state.phone)
        if(this.state.phone==''){
            this.refs.toast.show('请输入手机号码')
            return
        }
        if(this.state.password==''){
            this.refs.toast.show('请输入密码')
            return
        }
        let formData = new FormData();
        formData.append('password',this.state.password);
        post('account/login')(formData).then(response=>{
            this.refs.toast.show(response.msg)
            if(response.code==200){
                this.props.navigation.goBack()
            }
        });
    }
}
