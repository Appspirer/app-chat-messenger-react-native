import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from "./styles";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";



export default function Details({ navigation }) {

    const data = [
        {
            id: 0,
            fromId: 0,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "Message to this chat and calls are now secured with End to End encryption."
        },
        {
            id: 1,
            fromId: 1,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "Hi Anni, What’s Up?"
        },
        {
            id: 2,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "Oh, hello! All perfect ☺️👍",
            sent: 1
        },
        {
            id: 3,
            fromId: 1,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?COOL!!😎 Let’s Meet?"
        },
        {
            id: 4,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "How about this friday?How about this friday?How about this friday?How about this friday?How about this friday?How about this friday?",
            sent: 1
        },
        {
            id: 5,
            fromId: 1,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "Sounds Cool!!😎"
        },
        {
            id: 6,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 0,
            message: "Great Let’s catch up ☺️",
            sent: 1
        },
        {
            id: 7,
            fromId: 1,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 1,
            message: "Sounds Cool!!😎"
        },
        {
            id: 8,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 2,
            message: "Great Let’s catch up ☺️",
            sent: 1
        },
        {
            id: 9,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 2,
            message: "Great Let’s catch up ☺️",
            sent: 1
        },
        {
            id: 10,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 2,
            message: "Great Let’s catch up ☺️",
            sent: 1
        },
        {
            id: 11,
            fromId: 2,
            avatar: Images.avatar1,
            statusOnline: 1,
            typeMessage: 2,
            message: "Great Let’s catch up ☺️",
            sent: 1
        },
    ]

    const [value, setValue] = useState('')

    const renderMessage = (item) => {
        switch (item.fromId) {
            case 0:
                return (
                    <View style={styles.message_system}>
                        {Icons.Icons({ name: 'lock', height: 12, width: 9 })}
                        <Text style={styles.text_system}>{item.message}</Text>
                    </View>
                )
            case 1:
                return (
                    <View style={styles.message_customer}>
                        <View style={styles.left_message}>
                            <Image source={Images.avatar1} style={styles.avatar_item} />
                            <View style={styles.dot_online} />
                        </View>
                        <View style={{ maxWidth: '75%' }}>
                            <View style={styles.custom_bubbles_1} />
                            <View style={styles.custom_bubbles_2} />
                            <View style={styles.custom_bubbles_3} />
                            <View style={styles.message_customer_text_container}>
                                {renderTextMessage(item)}
                            </View>
                        </View>

                    </View>
                )
            case 2:
                return (
                    <View style={styles.message_onwer}>
                        <View style={styles.right_message}>
                            <View style={{ maxWidth: '75%' }}>
                                {item.typeMessage === 2 ? <></> :
                                    <>
                                        <View style={styles.custom_bubbles_4} />
                                        <View style={styles.custom_bubbles_5} />
                                        <View style={styles.custom_bubbles_6} />
                                    </>}
                                <View style={[styles.message_owner_text_container, {
                                    backgroundColor: item.typeMessage === 2 ? Colors.white : Colors.blue,
                                    paddingHorizontal: item.typeMessage === 2 ? 0 : 15,
                                    paddingVertical: item.typeMessage === 2 ? 0 : 10,
                                }]}>
                                    {renderTextMessage(item)}
                                </View>
                            </View>
                            <View style={styles.ic_check}>
                                {Icons.Icons({ name: 'check', height: 12, width: 12 })}
                            </View>
                        </View>
                    </View>
                )
        }
    }

    const renderTextMessage = (item) => {
        switch (item.typeMessage) {
            case 0:
                return (
                    <Text style={[styles.text_message, { color: item.fromId === 1 ? Colors.black : Colors.white }]}>{item.message}</Text>
                )
            case 1:
                return (
                    <View style={styles.sound_message}>
                        <TouchableOpacity>
                            {Icons.Icons({ name: 'play', height: 22, width: 22 })}
                        </TouchableOpacity>
                        <Image source={Images.Timeline} style={styles.timeline} />
                        <Text style={styles.text_time_line}>01:24</Text>
                    </View>
                )
            case 2:
                return (
                    <Image source={Images.sticker} style={styles.sticker} />
                )
        }
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
            keyboardVerticalOffset={60}>
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <View style={styles.left_header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {Icons.Icons({ name: 'back', height: 12, width: 20 })}
                        </TouchableOpacity>
                        <Image source={Images.avatar1} style={styles.avatar_header} />
                        <Text style={styles.text_name_header}>Jenni Miranda</Text>
                    </View>
                    <View style={styles.right_header}>
                        <TouchableOpacity>
                            {Icons.Icons({ name: 'call', height: 20, width: 22 })}
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            {Icons.Icons({ name: 'video', height: 20, width: 28 })}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content_container}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        inverted
                        data={data.reverse()}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={styles.item_container}>
                                    {renderMessage(item)}
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.bottom_container}>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "sticker_store", height: 26, width: 26 })}
                    </TouchableOpacity>
                    <View style={styles.text_input_container}>
                        <View style={styles.text_input_left}>
                            <TouchableOpacity>
                                {Icons.Icons({ name: "emoji", height: 24.7, width: 24.7 })}
                            </TouchableOpacity>
                            <TextInput
                                style={styles.text_input}
                                value={value}
                                onChangeText={setValue}
                                placeholder="Start Typing…"
                            />
                        </View>
                        <TouchableOpacity>
                            {Icons.Icons({ name: "plus_border", height: 26, width: 26 })}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom_right_container}>
                        <TouchableOpacity>
                            {Icons.Icons({ name: "voice", height: 26, width: 17 })}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.like}>
                            {Icons.Icons({ name: "like", height: 26, width: 26 })}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}