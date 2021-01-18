import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import ChatsScreen from '../scenes/ChatsScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ChatStack =createStackNavigator(); 

const ChatsStackScreen=()=>{

    return(
    <SafeAreaProvider>
        <NavigationContainer>
            <ChatStack.Navigator>
                <ChatStack.Screen name='Chats' component={ChatsScreen}/>
            </ChatStack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    )
}
export {ChatsStackScreen}