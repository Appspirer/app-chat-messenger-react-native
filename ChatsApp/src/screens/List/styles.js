import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white
    },
    header_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,
        backgroundColor:Colors.white,
        shadowColor:Colors.black,
        shadowOffset:{height:8},
        shadowOpacity: 0.05,
        paddingBottom:8,
        shadowRadius: 4
    },
    text_header:{
        fontSize:24
    },
    content_container:{
        marginTop:20
    },
    text_input:{
        height:40,
        marginLeft:10
    },
    input_container:{
        paddingHorizontal:15,
        backgroundColor:Colors.pale_blue,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:16
    },
    my_story:{
        backgroundColor: Colors.blue,
        height:66,
        width:66,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:33
    },
    horizontal_container:{
        marginTop:20
    },
    text_horizontal:{
        fontSize:14,
        marginTop:5
    },
    my_story_container:{
        paddingLeft:16
    },
    line:{
        height:1,
        marginHorizontal:16,
        backgroundColor:Colors.gray_silver,
        marginTop: 20
    },
    list_container:{
        marginHorizontal:16
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 16
    },
    left_item:{
        flexDirection:'row'
    },
    name:{
        fontSize:17
    },
    last_message:{
        fontSize:14
    },
    info:{
        justifyContent:'space-around',
        paddingVertical:10,
        marginLeft:10
    },
    avatar_container:{
        marginLeft:16
    },
    right_item:{
        justifyContent:'space-around',
        paddingVertical:10,
    },
    dot_unread:{
        height:9,
        width:9,
        borderRadius:5,
        backgroundColor:Colors.blue,
        alignSelf:'flex-end'
    },
    dot_chatting:{
        height:5,
        width:5,
        borderRadius:5,
        backgroundColor:Colors.blue,
        marginLeft:5
    },
    dot_chatting_container:{
        flexDirection:'row',
        alignSelf:'flex-end'
    },
    item_time:{
        fontSize:12
    }
})