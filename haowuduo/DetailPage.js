import React, {Component} from 'react';
import {Text} from 'react-native';

export default class DetailPage extends Component{

    static navigationOptions={
        title:'详情'
    }
    render (){
        return (
            <Text>这是详情页</Text>
        );
    }
}