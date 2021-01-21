import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import AddToTandem from './AddToTandem'
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        username: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        username: "Second Itemsaffas",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        username: "Third Item hdhjasjdj",
    },
       {
        id: "58694a0f-3da1-471f-bd96-145571e29324",
        username: "five",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d76",
        username: "Item",
    },
];


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity   onPress={onPress} style={[styles.item, style]}>
        <Text   style={styles.title}>{item.username}</Text>
    </TouchableOpacity>
);

const FakeListUsers = () => {
    const [selectedUsers,setSelectedUsers] = useState([])
    const [valueSearch,setValueSearch] = useState('');
    const onDeleteUser=(id)=>{
        const newUsers = selectedUsers.filter(e=>e.id!==id);
        setSelectedUsers(newUsers)
    }
    const onSearch =()=>{
        if(valueSearch==='')
            return DATA

        return  DATA.filter(e=> e.username.toLowerCase().indexOf(valueSearch.toLowerCase())>-1)
    }

    const onSelectUser = (id)=>{
        const user = DATA.find((e)=>e.id===id);

        if(selectedUsers.filter((e)=>e.id === user.id).length ===0){
            const selectUser = selectedUsers.concat(user);
            setSelectedUsers(selectUser)
        }
        else {
            const newUsers = selectedUsers.filter(e=>e.id!==id);
            setSelectedUsers(newUsers)
        }
        setValueSearch('');
    }
    const renderItem = ({ item }) => {
        const backgroundColor = selectedUsers.find(e=> e.id===item.id)?"#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => onSelectUser(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    const visibleUsers = onSearch();

    return (
        <SafeAreaView style={styles.container}>
            <AddToTandem 
            setValueSearch={setValueSearch} 
            valueSearch={valueSearch} 
            onDeleteUser ={onDeleteUser} 
            users={selectedUsers}
             />
                          
            <FlatList
                data={visibleUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedUsers}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

});

export default FakeListUsers;