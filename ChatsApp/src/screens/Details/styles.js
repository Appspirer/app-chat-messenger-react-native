import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { height: 8 },
        shadowOpacity: 0.05,
        paddingBottom: 8,
        shadowRadius: 4,
    },
    left_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar_header: {
        height: 42,
        width: 42,
        marginLeft: 15
    },
    text_name_header: {
        fontSize: 16,
        marginLeft: 10
    },
    right_header: {
        flexDirection: 'row',
    },
    content_container: {
        marginHorizontal: 16,
        flex: 1,
        paddingBottom:10
    },
    item_container: {
        marginTop: 20
    },
    message_system: {
        backgroundColor: Colors.pale_blue,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginHorizontal: 32,
        borderRadius: 12,
        flexDirection: 'row',
    },
    text_system: {
        fontSize: 12,
        marginLeft: 5,
        color: Colors.blue_gray
    },
    message_customer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar_item: {
        height: 34,
        width: 34
    },
    dot_online: {
        height: 7.27,
        width: 7.27,
        borderWidth: 1,
        borderColor: Colors.white,
        position: 'absolute',
        backgroundColor: Colors.green,
        bottom: 2,
        right: 1,
        borderRadius: 4
    },
    left_message: {
        alignSelf: 'flex-end',
        marginRight: 5,
        zIndex:1
    },
    right_message: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    ic_check: {
        justifyContent: 'flex-end',
        marginLeft: 5
    },
    text_message: {
        fontSize: 15
    },
    sound_message: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeline: {
        height: 16,
        width: 170,
        marginHorizontal: 5
    },
    text_time_line: {
        fontSize: 9,
        color: Colors.blue
    },
    sticker: {
        height: 91,
        width: 109
    },
    message_customer_text_container: {
        backgroundColor: Colors.pale_blue,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        alignSelf: 'flex-start'
    },
    message_owner_text_container: {
        borderRadius: 24
    },
    bottom_container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            height: -8
        },
        shadowOpacity: 0.05,
        height: 60,
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal:16
    },
    text_input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.pale_blue,
        borderRadius: 18,
        padding: 6,
        justifyContent: "space-between",
        width: '60%'
    },
    text_input_left: {
        flexDirection: 'row'
    },
    bottom_right_container: {
        flexDirection: 'row'
    },
    like:{
        marginLeft:16
    },
    text_input:{
        marginLeft:10
    },
    custom_bubbles_1:{
        position:'absolute',
        height:60,
        width:60,
        backgroundColor:Colors.pale_blue,
        borderBottomRightRadius:30,
        left:-20,
        bottom:-3
    },
    custom_bubbles_2:{
        position:'absolute',
        height:70,
        width:40,
        backgroundColor:Colors.white,
        borderBottomRightRadius:30,
        left:-26,
        bottom:-6
    },
    custom_bubbles_3:{
        position:'absolute',
        height:30,
        width:70,
        backgroundColor:Colors.white,
        borderBottomRightRadius:30,
        left:-26,
        top:-20
    },
    custom_bubbles_4:{
        position:'absolute',
        height:60,
        width:60,
        backgroundColor:Colors.blue,
        borderBottomLeftRadius:30,
        right:-19,
        bottom:-2
    },
    custom_bubbles_5:{
        position:'absolute',
        height:70,
        width:40,
        backgroundColor:Colors.white,
        borderBottomLeftRadius:30,
        right:-25,
        bottom:-6
    },
    custom_bubbles_6:{
        position:'absolute',
        height:30,
        width:70,
        backgroundColor:Colors.white,
        borderBottomLeftRadius:30,
        right:-5,
        top:-20
    },
    flatlist:{
        paddingBottom:10
    }
})