import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import Avatar from "../../components/Avatar";
import Colors from "../../themes/Colors";

const data = [
    {
        id: 0,
        name: "Annie",
        statusOnline: 1,
        avatar: Images.avatar1,
        moment: 1
    },
    {
        id: 1,
        name: "Jenni",
        statusOnline: 0,
        avatar: Images.avatar2,
        moment: 1
    },
    {
        id: 2,
        name: "Samuel",
        statusOnline: 1,
        avatar: Images.avatar3,
        moment: 1
    },
    {
        id: 3,
        name: "Annie",
        statusOnline: 0,
        avatar: Images.avatar1,
        moment: 1
    },
]

const dataList = [
    {
        id: 0,
        name: "Stells Stefword",
        statusOnline: 0,
        avatar: Images.avatar4,
        moment: 0,
        lastMessage: "You sent a sticker",
        time: '5:30 PM',
        status: 2
    },
    {
        id: 1,
        name: "Samuel Joyce",
        statusOnline: 1,
        avatar: Images.avatar3,
        moment: 1,
        lastMessage: "Samuel sent a sticker",
        time: '4:00 PM',
        status: 1
    },
    {
        id: 2,
        name: "Jenni Miranda",
        statusOnline: 0,
        avatar: Images.avatar2,
        moment: 1,
        lastMessage: "I like this version 😍🥰",
        time: '10:00 AM',
        status: 0
    },
    {
        id: 3,
        name: "Elva Barker",
        statusOnline: 0,
        avatar: Images.avatar5,
        moment: 0,
        lastMessage: "Elva sent an attachment",
        time: '22 Aug',
        status: 0
    },
    {
        id: 4,
        name: "Amanda Brown",
        statusOnline: 0,
        avatar: Images.avatar1,
        moment: 1,
        lastMessage: "Coo!! Go for it 😍",
        time: '4:00 PM',
        status: 0
    },
    {
        id: 5,
        name: "Amanda Brown",
        statusOnline: 0,
        avatar: Images.avatar1,
        moment: 1,
        lastMessage: "Coo!! Go for it 😍",
        time: '4:00 PM',
        status: 0
    },
    {
        id: 6,
        name: "Amanda Brown",
        statusOnline: 0,
        avatar: Images.avatar1,
        moment: 1,
        lastMessage: "Coo!! Go for it 😍",
        time: '4:00 PM',
        status: 0
    },
]

export default function List({navigation}) {

    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.text_header}>Chats</Text>
                {Icons.Icons({ name: "note", height: 32, width: 32 })}
            </View>
            <View style={styles.content_container}>
                <View style={styles.input_container}>
                    {Icons.Icons({ name: 'search', height: 16, width: 16 })}
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        style={styles.text_input}
                        placeholder="Search"
                    />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontal_container}>
                    <TouchableOpacity style={styles.my_story_container}>
                        <View style={styles.my_story}>
                            {Icons.Icons({ name: 'plus', height: 20, width: 20 })}
                        </View>
                        <Text style={styles.text_horizontal}>Your Story</Text>
                    </TouchableOpacity>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={styles.avatar_container}>
                                <Avatar data={item} />
                            </View>
                        )
                    })}
                </ScrollView>
                <View style={styles.line} />
                <View style={styles.list_container}>
                    <FlatList
                        data={dataList}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Details')}>
                                    <View style={styles.left_item}>
                                        <Avatar data={item} shownName={false} />
                                        <View style={styles.info}>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={[styles.last_message, {
                                                color: item.status === 1 ? Colors.black_unread : Colors.gray
                                            }]}>{item.lastMessage}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.right_item}>
                                        <Text style={[styles.item_time,{
                                            color: item.status === 1 ? Colors.black_unread : Colors.gray
                                        }]}>{item.time}</Text>
                                        {item.status === 1 ? <View style={styles.dot_unread} /> :
                                            item.status === 2 ? <View style={styles.dot_chatting_container}>
                                                <View style={styles.dot_chatting} />
                                                <View style={styles.dot_chatting} />
                                            </View> :
                                                <View></View>}
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}