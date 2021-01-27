import moment from 'moment';
import React,{memo} from 'react'
import {View,Text} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const getPrettyTime=(whenHappenTimeStamp,currentTimeStamp)=>{
    const whenHappenMoment = moment(whenHappenTimeStamp)
    const unitOfTimeValue = moment.duration(whenHappenMoment.diff(currentTimeStamp));
    if(unitOfTimeValue.asYears()>=1){
        return{
            text:Math.trunc(unitOfTimeValue.asYears())+'y',
            color:'#5465FF',
            fill:100,
        }
    }
    else if(unitOfTimeValue.asWeeks()>=4){
        return{
            text:Math.trunc(unitOfTimeValue.asWeeks())+'w',
            color:'#5465FF',
            fill:100,
        }
    }
    else if(unitOfTimeValue.asDays()>1){
        return{
            text:Math.trunc(unitOfTimeValue.asDays())+'d',
            color:'#5465FF',
            fill:100,
        }
    }
    else if(unitOfTimeValue.asMinutes()>1){
        const timeMinutes = unitOfTimeValue.asMinutes()
        const timeHours = unitOfTimeValue.asHours()
        if(Math.floor(timeMinutes)<=30){
            return{
                text:Math.floor(timeMinutes)+'m',
                color:'#0AD8D8',
                fill:(Math.floor(timeMinutes)/60)*100,
            }
        }
        else{
            if(timeHours>=1){
                return{
                    text:Math.floor(timeHours)+'h',
                    color:'#5465FF',
                    fill:(Math.floor(timeMinutes)/28.2)+50,
                }
            }
            else {
                return{
                    text:Math.floor(timeMinutes)+'m',
                    color:'#5465FF',
                    fill:(Math.floor(timeMinutes)/28.2)+50,
                }
            }
        }
    }
    else if (unitOfTimeValue.asSeconds() >1){
        const timeSeconds = Math.floor(unitOfTimeValue.asSeconds());
        return{
            text:timeSeconds+'s',
            color:'#F4030E',
            fill:(timeSeconds/60)*100,
        }
    }
    else{
        return{
            text:'no',
            color:'#F4030E',
            fill:0,
        }
    }

}
const CustomCircularProgress=memo (({fill,text,color})=>{
    return(
        <View style={{alignItems:'flex-start'}}>
            <AnimatedCircularProgress
                size={62}
                rotation={0}
                width={8}
                style={{ transform: [{ scaleX: -1 }] }}
                tintColor={color}
                fill={fill}
                childrenContainerStyle={{backgroundColor:'black',transform: [{ scaleX: -1 }] }}
                children={()=>(
                    <Text style={{color:'white',fontWeight: '700',
                        fontSize: 16}}>{text}</Text>
                )}
            />
        </View>
    )
})

function RemainingTime(props){
    const diffTime = getPrettyTime(props.timestamp,props.currentstamp);
    return(
        <CustomCircularProgress {...diffTime} />
    )
}

export default RemainingTime;