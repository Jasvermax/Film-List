import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewedScreen from '../screens/MostViewedScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="DetailMovieScreen"
                component={DetailMovieScreen}
            />

            <Stack.Screen
                name="MostViewedScreen"
                component={MostViewedScreen}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;
