import React, { useState } from "react";
import { FlatList,StyleSheet, SafeAreaView,View, TextInput, Text, TouchableOpacity } from "react-native";

const AddToTandem = (props)=>{
    const{users} = props;
    const {valueSearch,setValueSearch} = props ;
    return(
        <View style={styles.container}>
            <Text style={styles.text} >
                To:
            </Text>
            <View style={{ flexDirection:'row',flexWrap:'wrap',maxWidth:'80%'}}>
                {users.map((item,index)=>{
                    return(
                        <TouchableOpacity
                          onPress={()=>props.onDeleteUser(item.id)} 
                          key={index} 
                          style={styles.userNameContainer} >
                            <Text style={styles.textUserName}>{item.username}</Text>
                        </TouchableOpacity>
                    )
                })}
            <TextInput
                value={valueSearch}
                onChangeText={(e)=>setValueSearch(e)}
                style={{flex:1}}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:16
    },
    text:{
        fontSize:15,
        marginRight:5
    },

    userNameContainer:{
        borderRadius:70,
        backgroundColor:'#5465FF',
        margin:3,
    },
    textUserName:{
        color:'#FFFFFF',
        padding:5
    }
})
export  default AddToTandem