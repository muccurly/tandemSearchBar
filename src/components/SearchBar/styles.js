import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
       width:'100%',
       alignItems:'center'
    },
    searchHeader:{
        paddingLeft:40,
        backgroundColor:'#F5F5F5',
        color:'#5465FF',
        fontSize:15,
        flex:1,
        borderRadius:20,
        height:40,
    },search_icon_box: {
        width:40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#ACB5B9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      titleHeader:{
          fontSize:26,
          fontWeight:'700',
      },
      cancelText:{
        color:'blue',
        fontWeight:'300',
    },
    containerSafeAreaView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#D5DADC',
        backgroundColor:'#FFFFFF'
      },
})