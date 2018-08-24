import React, {Component} from 'react';
import {Image,Dimensions,StyleSheet} from 'react-native';

export default class Splash extends Component{
    render (){
        return (
           <Image style={splashStyle.imageStyle} source={require('./images/app_splash.png')}></Image>
        );
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            console.log('跳转至主页');
            this.props.navigation.navigate('Main');
        },2000);
    }
    componentWillUnmount(){
            this.timer&&clearTimeout(this.timer);
    }
}
const splashStyle = StyleSheet.create({
    imageStyle:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        resizeMode:Image.resizeMode.stretch
    },
})