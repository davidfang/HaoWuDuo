import React, { Component } from 'react';
import {Image,TextInput,View,Button,Text} from 'react-native';

import {scaleSize} from '../../utils/ScreenUtil';
import {normalStyle} from '../NormalStyle';
import {post} from '../../http/ApiHelper';

import Toast, {DURATION} from 'react-native-easy-toast'

export default class Register extends Component{
    constructor(props){
        super(props);
        this.userChangeText = this.userChangeText.bind(this);
        this.codeChangeText = this.codeChangeText.bind(this);
        this.state = {
            phone:'',
            code:''
        }
    }
    static navigationOptions={
        title:'注册',
    }
    render (){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{marginTop:scaleSize(60),paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/login_main_phone.png')}></Image>
                        <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入手机号码' textContentType='telephoneNumber' maxLength={11} onChangeText={this.userChangeText}></TextInput>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{flexDirection:'row',height:scaleSize(100),alignItems:'center'}}>
                        <Image style={{width:scaleSize(48),height:scaleSize(48)}} source={require('../../images/logo_password_gray.png')}></Image>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <TextInput style={{width:scaleSize(400),marginLeft:scaleSize(15),fontSize:14}} placeholder='请输入验证码' textContentType='telephoneNumber' maxLength={6} onChangeText={this.codeChangeText}></TextInput>
                            <View style={{height:scaleSize(48)}}>
                                <Button title='获取验证码' onPress={()=>{
                                    this.getAuthCode();
                                }}></Button>
                            </View>
                        </View>
                    </View>
                    <View style={normalStyle.lineStyle}></View>
                    <View style={{height:scaleSize(88),marginTop:scaleSize(60)}}>
                        <Button title='确定' onPress={()=>{
                            this.register();
                        }}></Button>
                    </View>
                    <Text style={{marginTop:scaleSize(10)}}>注册代表您已同意《好物多注册协议》</Text>
                </View>
                <Toast ref="toast" position='center'/>
            </View>
        )};
    userChangeText(userData){
        this.setState({phone:userData});
    }
    codeChangeText(codeData){
        this.setState({code:codeData});
    }
    /**
     * 获取验证码
     */
    getAuthCode(){
        this.refs.toast.show('未上线');
    }
    register(){
        if(this.state.phone==''){
            this.refs.toast.show('请输入手机号码');
            return
        }
        if(this.state.code==''){
            this.refs.toast.show('请输入验证码')
            return
        }
        console.log('the phone is '+this.state.phone)
        this.props.navigation.navigate('RegisterPassword',{
            phone:this.state.phone,
            code:this.state.code
        })
    }
}
