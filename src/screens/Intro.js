import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'page 1',
        title: 'Fame List Page 1',
        text: 'This includes some fancy text about page 1',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'page 2',
        title: 'Fame List Intro Page 2',
        text: 'This includes some fancy text about Sheldon Cooper',
        backgroundColor: '#febe29',
    },
    {
        key: 'page 3',
        title: 'Fame List Intro Page 3',
        text: 'This includes some fancy text about App',
        backgroundColor: '#22bcb5',
    }
];

export default class Intro extends React.Component {
    _renderItem = (slide) => {
        return (
            <View style={{flex: 1, backgroundColor: slide.item.backgroundColor}}>
                <Text>{slide.item.title}</Text>
                <Text>{slide.item.text}</Text>
            </View>
        );
    };

    _onDone = () => {
        this.props.navigation.navigate('Welcome')
    };

    render() {
        return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
}