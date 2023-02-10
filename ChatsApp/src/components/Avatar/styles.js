import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container: {
        justifyContent:'center',
    },
    avatar:{
        height:58,
        width:58
    },
    avatar_container:{
        height:66,
        width:66,
        borderWidth:1,
        borderColor:Colors.blue,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:33,
    },
    text:{
        textAlign:'center',
        marginTop:5
    },
    dot_online:{
        height:12,
        width:12,
        backgroundColor:Colors.green,
        position:'absolute',
        borderRadius:6,
        bottom:5,
        right:4,
        borderWidth:1,
        borderColor:Colors.white
    }
}
)