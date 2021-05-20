import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

LogBox.ignoreLogs(['Remote debugger']);
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Index'>
                <Stack.Screen name='Index' component={IndexScreen} />
                <Stack.Screen
                    name='Show'
                    component={ShowScreen}
                    options={{
                        title: 'Show',
                    }}
                />
                <Stack.Screen
                    name='Create'
                    component={CreateScreen}
                    options={{
                        title: 'Create',
                    }}
                />
                <Stack.Screen
                    name='Edit'
                    component={EditScreen}
                    options={{
                        title: 'Edit',
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
