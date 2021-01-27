import moment from 'moment';
import React,{useState,useEffect} from 'react'
import {View} from 'react-native'
import RemainingTime from './RemainingTime'
const timeOfEvent = Date.now()+((((60000*60)*24)*7)*5)
const timeOfEvent2 = Date.now()+((((60000*60)*24)*7)*4)*16
const timeOfEvent4 = Date.now()+(60000*60)*13
const timeOfEvent5 = Date.now()+((60000*32))
const timeOfEvent3 = Date.now()+((80000))
export default function EventsScreen(props){
    const [currentTime,setCurrentTime] = useState(moment());
    useEffect(()=>{

          const clock = setInterval(()=>{
               setCurrentTime(moment());
           },1000)

        return ()=> clearInterval(clock);
    },[currentTime])

    return(
        <View>
            <RemainingTime timestamp = {timeOfEvent}  currentstamp = {currentTime}/>
            <RemainingTime timestamp = {timeOfEvent2}  currentstamp = {currentTime}/>
            <RemainingTime timestamp = {timeOfEvent3}  currentstamp = {currentTime}/>
            <RemainingTime timestamp = {timeOfEvent4}  currentstamp = {currentTime}/>
            <RemainingTime timestamp = {timeOfEvent5}  currentstamp = {currentTime}/>
        </View>
    )
}