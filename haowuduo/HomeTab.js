import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import Swiper from 'react-native-swiper'

export default class HomeTab extends Component{


    render (){
        return (
        <View style={{height:200}}>
            <Swiper
                style={styles.swiper}
                height={200}
                horizontal={true}
                paginationStyle={{bottom: 10}}
                showsButtons={false}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}>
                <Image source={require('./images/mine_banner.png')} style={styles.img}/>
                <Image source={require('./images/mine_banner.png')} style={styles.img}/>
                <Image source={require('./images/mine_banner.png')} style={styles.img}/>
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
        height: 200,
    }
});