import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import ChatsScreen from '../scenes/ChatsScreen'
import EventsScreen from '../scenes/EventsScreen'
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