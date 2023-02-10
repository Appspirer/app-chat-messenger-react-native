import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Images from "../../themes/Images";

export default function Avatar({ data, shownName = 'true' }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <View style={[styles.avatar_container, {
                    borderWidth: data.moment === 1 ? 1 : 0
                }]}>
                    <Image source={data.avatar} style={[styles.avatar, {
                        height: data.moment === 1 ? 58 : 66, width: data.moment === 1 ? 58 : 66
                    }]} />
                </View>
                {data.statusOnline === 1 ? <View style={styles.dot_online} /> : <></>}
            </View>
            {shownName ? <Text style={styles.text}>{data.name}</Text> : <></>}
        </TouchableOpacity>
    )
}