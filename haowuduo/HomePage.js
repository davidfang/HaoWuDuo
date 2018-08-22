import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import Detailpage from './DetailPage';

export default class MinePage extends Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={{height: 25, width: 25}}
                          source={require('./images/tab_home_select.png')}/>
                );
            }
            return (
                <Image style={{height: 25, width: 25}}
                          source={require('./images/tab_home_unselect.png')}/>
            );
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>首页界面</Text>
                <Button style={{height: 200, width: 50}} onPress={
                    ()=>{
                        this.props.navigation.navigate('DetailsPage'); 
                    }} title="跳转详情页"></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});