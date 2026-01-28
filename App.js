import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TryCodeScreen from './src/screens/TryCodeScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/* <TryCodeScreen/> */}
                {/* <HomeScreen/> */}
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider> 
    )
}

export default App;