import {View,Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from '../components/SearchBar/SearchBar'

export default function ChatsScreen({navigation}){
        const [state,setData] = useState({data:[],searchTxt:''})
    
        const onSearchChange =(e)=>{
            setData({data:state.data,searchTxt:e})            
        }
        
        React.useLayoutEffect(()=>{
            navigation.setOptions({
            header:()=>(
            <SafeAreaView  style={styles.containerSafeAreaView}>
                <SearchBar onChange={(text)=> onSearchChange(text)} />
            </SafeAreaView>
            )
            })
        },[navigation])

        return(
            <ScrollView style={styles.container}>
                <View style={styles.fakePost} />
            </ScrollView>
        )
}
const styles= StyleSheet.create({
    container:{
        paddingTop:10,
        backgroundColor:'#FFFFFF',
    },
    containerSafeAreaView:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#D5DADC',
        backgroundColor:'#FFFFFF'
      },
})


