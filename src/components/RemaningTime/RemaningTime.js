import moment from 'moment';
import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function RemaningTime(props){
    const [timerText,setTimerText] = useState('')
    const [isTimerWork,setIsTimerWork] = useState(true);
    const [valueOfProgg,setValueOfProgg] = useState(0)
    const [MAX_POINTS,setMaxPoints] = useState(28.2);
    const [borderColor,setBorderColor] = useState('#F4030E')

    const getPrettyTime=(whenHappenTimeStamp)=>{
        const whenHappenMoment = moment(whenHappenTimeStamp)
        const unitOfTimeValue = moment.duration(whenHappenMoment.diff(moment()))
        if(unitOfTimeValue.asDays()>1){
            setBorderColor('#5465FF')
            setMaxPoints(0);
            return Math.trunc(unitOfTimeValue.asDays())+'d'
        }

        else if(unitOfTimeValue.asMinutes()>1){
            if(unitOfTimeValue.asMinutes()<=30){
                setMaxPoints(60);
                setBorderColor('#0AD8D8')                
                return Math.round(unitOfTimeValue.asMinutes())+'m'
            }
            else{
                setMaxPoints(28.2)
                setBorderColor('#5465FF')
                return Math.trunc(unitOfTimeValue.asMinutes())+'h'
            }
        }
        else if (unitOfTimeValue.asSeconds() >1){
            setMaxPoints(60);
            setBorderColor('#F4030E')
            return Math.trunc(unitOfTimeValue.asSeconds())+'s'
        }
        else
        setIsTimerWork(false);
            return 'no'

    }


    useEffect(()=>{
        let clockCall;
        if(isTimerWork){
                clockCall = setInterval(()=>{
                const timeOfEvent = props.timestamp;
                const diffTime = getPrettyTime(timeOfEvent)
                const fill = MAX_POINTS=== 28.2? ((parseInt(diffTime)/MAX_POINTS)+50): ((parseInt(diffTime)/MAX_POINTS)*100)
                const time = MAX_POINTS=== 28.2? Math.round(parseInt(diffTime)/60)+'h' : diffTime;
                setTimerText(time)
                setValueOfProgg(fill);
            },1000)
        }
        return()=>{
            clearInterval(clockCall);
        }
    },[timerText,MAX_POINTS])

    return(
        <View style={{alignItems:'flex-start'}}>
            <AnimatedCircularProgress
                size={62}
                rotation={0}
                width={8}
                style={{ transform: [{ scaleX: -1 }] }}
                tintColor={borderColor}
                fill={valueOfProgg>100?100:valueOfProgg}
                childrenContainerStyle={{backgroundColor:'black',transform: [{ scaleX: -1 }] }}
                children={()=>(
                    <Text style={{color:'white',fontWeight: '700',
                    fontSize: 16}}>{timerText}</Text>
                    )}
                    />
                </View>
    )
}