import moment from 'moment';
import React,{useState,useEffect} from 'react'
import {View} from 'react-native'
import RemaningTime from '../components/RemaningTime/RemaningTime'
const timeOfEvent = Date.now()+((60000*60)*23)
const timeOfEvent4 = Date.now()+(4000)
const timeOfEvent2 = Date.now()+((4000))
const timeOfEvent5 = Date.now()+((60000*31))
const timeOfEvent3 = Date.now()+((60000*60)*12)
export default function EventsScreen(props){
    return(
        <View>
            <RemaningTime timestamp = {timeOfEvent} />
            {/* <RemaningTime timestamp = {timeOfEvent2} /> */}
            <RemaningTime timestamp = {timeOfEvent3} />
            <RemaningTime timestamp = {timeOfEvent4} />
            <RemaningTime timestamp = {timeOfEvent5} />           
        </View>

    )
}