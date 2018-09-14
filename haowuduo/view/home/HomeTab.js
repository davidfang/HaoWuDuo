import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image,FlatList,TouchableNativeFeedback,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import {scaleSize} from '../../utils/ScreenUtil'

import {getFetchNeverCached} from '../../http/ApiHelper';

export default class HomeTab extends Component{
    constructor(props){
        super(props)
        this.state={
            bannerData:[],
            productData:[],
        }
    }
    componentDidMount(){
       getFetchNeverCached("product/getBannerList",{typeId:this.props.typeId}).then(data=>{
           this.setState({
                bannerData:data.data,
           })
        });
        getFetchNeverCached("product/getProductList").then(response=>{
            this.setState({
                productData:response.data
            })
        })
    }
    render (){
        return (
        <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
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
            <FlatList 
                style={{flex:1}}
                data={this.state.productData}
                horizontal={false}
                renderItem={this._rederItem}
                keyExtractor={(item, index)=>{
                     item.typeId   
                }}></FlatList>
        </ScrollView>
        );
    }
    // 渲染
    renderSwiper(){
        var itemArr = [];
        for (var i = 0; i < this.state.bannerData.length; i++) {
            let data = this.state.bannerData[i];
            itemArr.push(
                <TouchableNativeFeedback key={i}>
                     <Image source={{uri:data.imageUrl}} style={styles.img} />
                </TouchableNativeFeedback>
            );
        }
        return itemArr;
    }
    _rederItem=({item})=>{
            return(<View style={{flex:1,flexDirection:'row',height:scaleSize(230),justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}} key={item.typeId}> 
                    <Image style={{width:scaleSize(200),height:scaleSize(200),resizeMode:'stretch'}} source={{uri:item.imageUrl}}></Image>
                    <View style={{flex:1,marginLeft:scaleSize(15),height:scaleSize(200),justifyContent:'space-between'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:scaleSize(36),height:scaleSize(23)}} source={require('../../images/ic_label_tmall.png')}></Image>
                            <Text style={{marginLeft:scaleSize(10)}} numberOfLines={2}>{item.productTitle}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{color:'#F84747'}}>¥ {item.discountPrice}</Text>
                            <Text style={{marginLeft:scaleSize(20),color:'#CDCDCD'}}>天猫价 ¥ {item.productPrice}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{flex:1,color:'#AEAEAE'}}>已售 {item.salesCount}万</Text>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginTop:scaleSize(10)}}>
                                <Text style={{width:scaleSize(150),backgroundColor:'#CDCDCD'}}> 券 ¥ {item.couponCount}</Text>
                                <Text style={{backgroundColor:'#F9E4E4'}}>预估佣金 ¥{item.commission}</Text>
                            </View>
                        </View>
                    </View>
                </View>)
    }
    menuItem =()=>{
        var menuArray = []; 
            for(var i=0;i<5;i++){
                menuArray.push(
                <View style={{flex:1,justifyContent:'center',height:scaleSize(150),alignItems:'center'}} key={i}>
                    <Image style={{width:scaleSize(50),height:scaleSize(50),alignSelf:'center'}} source={require('../../images/ic_launcher.png')}></Image>
                    <Text style={{marginTop:scaleSize(10),alignSelf:'center',fontSize:12}}>9.9包邮</Text>
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