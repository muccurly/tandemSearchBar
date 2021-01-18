import React,{useState,useRef} from 'react'
import {TextInput,Text, View,Easing, Keyboard,TouchableOpacity,Animated} from 'react-native'
import {styles} from './styles'

export const SearchBar=(props)=>{
  const [valueSearch,setValueSearch] = useState('');
  const [isFocused,setIsFocused] = useState('');
  const animation = useRef(new Animated.Value(0)).current;
   const onSearchChange=(e)=>{
        setValueSearch(e)
        props.onChange(e);
    }
    const onPress =(e)=>{
        animation.setValue(0);
        Animated.timing(animation,{
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver:false,
        }).start()
        setIsFocused(!isFocused)
    }
    const onPressCancel=(e)=>{
        setValueSearch('');
        Keyboard.dismiss();
        setIsFocused(!isFocused);
    }
    const widthVal = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['40%','100%'],
      });
    
      const animStyle = {
        animation,
        width:widthVal,        
      };
    return(
        <View style={styles.container} >
            {isFocused?(
                <Animated.View style={[styles.content,animStyle]}>   
                    <TextInput 
                            placeholderTextColor='#5465FF'           
                            placeholder='Search Chats'
                            style={styles.searchHeader}
                            value={valueSearch}                        
                            onChangeText={onSearchChange}
                     />
                    <TouchableOpacity style={{width:64,alignItems:'flex-end'}}
                        onPress={onPressCancel}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </Animated.View>
            ):
            <View style={styles.content}>
                <Text style={styles.titleHeader} >Chats</Text>
                <TouchableOpacity  onPress={()=>onPress()}>
                    <View  style={styles.search_icon_box}   />
                </TouchableOpacity>
            </View>
            }          
        </View>
    )
}
