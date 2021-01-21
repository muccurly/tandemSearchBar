import moment from 'moment';
import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ScrollView,FlatList} from 'react-native'
import RemaningTime from '../components/RemaningTime/RemaningTime'
const timeOfEvent = Date.now()+((60000*70))
const timeOfEvent4 = Date.now()+(70000)
const timeOfEvent2 = Date.now()+((60000*60)*49)
const timeOfEvent5 = Date.now()+((60000*60)*12)
const timeOfEvent3 = Date.now()+((60000*60)*0.55)
export default function EventsScreen(props){
    return(
        <View>
            <RemaningTime date = {timeOfEvent} />
            <RemaningTime date = {timeOfEvent2} />
            <RemaningTime date = {timeOfEvent3} />
            <RemaningTime date = {timeOfEvent4} />
            <RemaningTime date = {timeOfEvent5} />
        </View>

    )
}