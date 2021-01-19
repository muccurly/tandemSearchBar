import {View,Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from '../components/SearchBar/SearchBar'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { color } from 'react-native-reanimated';
export default function ChatsScreen({navigation}){
        const [searchTxt,setSearchTxt] = useState('')

        const onSearchChange =(e)=>{
            console.log(e);
             setSearchTxt(e);          
        }
        
        React.useLayoutEffect(()=>{
            navigation.setOptions({
            header:()=>(
                <SearchBar onChange={(text)=> onSearchChange(text)} />
            )
            })
        },[navigation])

            
        
        return(
            <ScrollView style={styles.container}>

            </ScrollView>
        )
}
const styles= StyleSheet.create({
    container:{
        paddingTop:10,
        backgroundColor:'#FFFFFF',
    }
})


