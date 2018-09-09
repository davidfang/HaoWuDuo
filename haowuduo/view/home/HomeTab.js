import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image,FlatList,TouchableNativeFeedback} from 'react-native';
import Swiper from 'react-native-swiper';
import {scaleSize} from '../../utils/ScreenUtil'

import {getFetchNeverCached} from '../../http/ApiHelper';

export default class HomeTab extends Component{
    constructor(props){
        super(props)
        this.state={
            listData:'',
        }
    }
    componentDidMount(){
       getFetchNeverCached("product/getBannerList",{typeId:this.props.typeId}).then(data=>{
           this.setState({
               listData:data.data
           })
        });
    }
    render (){
        return (
        <View style={{flex:1}}>
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
                    {this.renderSwiper()}
                </Swiper>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly',flexDirection:'row',backgroundColor:'#fff'}}>
                {this.menuItem()}
            </View>
            <FlatList style={{flex:1}}
            data={this.state.listData}
                      horizontal={false}
                      numColumns={2}
                      renderItem={this._rederItem}></FlatList>
        </View>
        );
    }
    // 渲染
    renderSwiper(){
        var itemArr = [];
        for (var i = 0; i < this.state.listData.length; i++) {
            let data = this.state.listData[i];
            itemArr.push(
                <TouchableNativeFeedback key={i}>
                     <Image source={{uri:data.imageUrl}} style={styles.img} />
                </TouchableNativeFeedback>
            );
        }
        return itemArr;
    }
    _rederItem=({item})=>{
            return(<View key={item.typeId}> 
                <Image style={{width:scaleSize(150),height:scaleSize(150)}} source={require('../../images/ic_xd_shop.png')}></Image>
                <Text>{item.description}</Text>
            </View>)
    }
    menuItem =()=>{
        var menuArray = []; 
            for(var i=0;i<5;i++){
                menuArray.push(
                <View style={{flex:1,justifyContent:'center',height:scaleSize(200),alignItems:'center',backgroundColor:'#eee'}} key={i}>
                    <Image style={{width:scaleSize(100),height:scaleSize(100),alignSelf:'center'}} source={require('../../images/ic_launcher.png')}></Image>
                    <Text style={{marginTop:scaleSize(10),alignSelf:'center'}}>9.9包邮</Text>
                </View>
                )
            }
        return menuArray
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