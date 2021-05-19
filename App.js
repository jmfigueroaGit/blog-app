import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';

LogBox.ignoreLogs(['Remote debugger']);
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Index'>
                <Stack.Screen
                    name='Index'
                    component={IndexScreen}
                    options={{
                        title: 'Blogs',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};
