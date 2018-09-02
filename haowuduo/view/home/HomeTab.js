import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image,FlatList} from 'react-native';
import Swiper from 'react-native-swiper';
import {scaleSize} from '../../utils/ScreenUtil'

import {getFetchNeverCached} from '../../http/ApiHelper';

export default class HomeTab extends Component{
    constructor(props){
        super(props)
        this.state={
            listData:null,
        }
    }
    componentDidMount(){
       getFetchNeverCached("products/planPlus").then(data=>{
           this.setState({
               listData:data
           })
        });
    }
    render (){
        return (
        <View>
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
            <FlatList data={this.state.listData}
                       renderItem={({item}) => <View>
                           <Image style={{width:scaleSize(150),height:scaleSize(150)}} source={require('../../images/ic_xd_shop.png')}></Image>
                           <Text>{item.title}</Text>
                       </View>}></FlatList>
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