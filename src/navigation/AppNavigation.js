import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import EventsScreen from '../components/RemainingTime/EventsScreen'
import ChatsScreen from '../scenes/ChatsScreen'
import FakeListUsers from '../components/AddToTandem/FakeListUsers'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ChatStack =createStackNavigator(); 

const ChatsStackScreen=()=>{

    return(
    <SafeAreaProvider>
        <NavigationContainer>
            <ChatStack.Navigator>
                <ChatStack.Screen name='Chats' component={EventsScreen}/>
            </ChatStack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    )
}
export {ChatsStackScreen}