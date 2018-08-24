import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import Swiper from 'react-native-swiper'
import {scaleSize} from '../../utils/ScreenUtil'

export default class HomeTab extends Component{
    render (){
        return (
        <View style={{height:scaleSize(344)}}>
            <Swiper
                style={styles.swiper}
                height={scaleSize(344)}
                horizontal={true}
                paginationStyle={{bottom: 10}}
                showsButtons={false}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}>
                <Image source={require('../../images/mine_banner.png')} style={styles.img}/>
                <Image source={require('../../images/mine_banner.png')} style={styles.img}/>
                <Image source={require('../../images/mine_banner.png')} style={styles.img}/>
            </Swiper>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    swiper: {

    },
    img: {
        width: Dimensions.get('window').width,
        height: scaleSize(344),
    }
});