import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Intro from "./Intro";
import Welcome from "./Welcome";
import FameList from "./FameList";


const AppNavigator = createStackNavigator({
        Intro: {
            screen: Intro,
            path: 'Intro/',
            navigationOptions: () => ({
                tabBarVisible: false
            })
        },
        Main: {
            screen: createBottomTabNavigator({
                Welcome: {
                    screen: Welcome,
                    path: 'Welcome/',
                    navigationOptions: () => ({
                        tabBarVisible: true
                    })
                },
                FameList: {
                    screen: FameList,
                    path: 'FameList/',
                    navigationOptions: () => ({
                        tabBarVisible: true
                    })
                }
            }),
            path: 'Main/',
            navigationOptions: () => ({
                tabBarVisible: false
            })
        },

    }
    , {
        headerMode: 'none'
    });


export default AppNavigator;