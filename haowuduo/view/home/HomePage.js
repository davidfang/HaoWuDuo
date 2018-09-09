import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

import HomeTab from './HomeTab';
import {getFetchNeverCached} from '../../http/ApiHelper'
import {scaleSize} from '../../utils/ScreenUtil'

export default class MinePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            tabData: [],
        };
    }
    componentDidMount(){
        getFetchNeverCached('product/getHomeCategory').then(resoponse=>{
            this.setState({tabData:resoponse.data})
        })
    }
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 25, width: 25}}
                          source={require('../../images/tab_home_select.png')}/>
                );
            }
            return (
                <Image style={{height: 25, width: 25}}
                          source={require('../../images/tab_home_unselect.png')}/>
            );
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        let label = this.state.tabData
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",height:scaleSize(80),backgroundColor:'white'}}>
                    <TextInput style={styles.inputStyle} placeholder="粘贴宝宝链接，先领劵后购买" underlineColorAndroid="transparent"></TextInput>
                </View>
                <ScrollableTabView
                        initialPage={0}
                        renderTabBar={() => <ScrollableTabBar />}
                        tabBarBackgroundColor='white'
                        tabBarActiveTextColor='#F32F19'
                        tabBarInactiveTextColor='#333'
                        tabBarUnderlineStyle={{backgroundColor:'#F32F19'}}>
                    {
                         label.map((item, index) => {
                             return (<HomeTab tabLabel={item.typeName} typeId={item.typeId}/>)
                         })
                     }
                </ScrollableTabView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 15,
    },
    inputStyle:{
        width:Dimensions.get('window').width,
        height:scaleSize(50),
        backgroundColor:'#F3F3F3',
        padding: 0,
        textAlign:'center',   
    }
});