import React, {Component} from 'react';
import {Image,Dimensions,StyleSheet} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class Splash extends Component{
    render (){
        return (
           <Image style={splashStyle.imageStyle} source={require('../images/app_splash.png')}></Image>
        );
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            console.log('跳转至主页');
            const navigateAction = NavigationActions.navigate({
                routeName: 'Main',
                params: {},
                action: NavigationActions.navigate({ routeName: 'Main' }),
              });
              
              this.props.navigation.dispatch(navigateAction);
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