import React from 'react';
import { Image, View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, Call, People, Profile } from '../screens';
import Icons from '../themes/Icons';
import Images from '../themes/Images';
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:Colors.black,
                tabBarStyle:{
                    paddingTop:5,
                    height:60,
                    backgroundColor:Colors.white,
                    shadowColor: Colors.black,
                    shadowOffset:{
                        height:-8
                    },
                    shadowOpacity:0.05,
                    shadowRadius: 4
                }
            }}>
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'chat' : 'chat_gray', width: 23.39, height: 25.34 })}
                            <View style={{
                                backgroundColor:Colors.blue,
                                position:'absolute',
                                right:-8,
                                top:-3,
                                borderRadius:7,
                                borderWidth:1,
                                borderColor: Colors.white,
                            }}>
                                <Text style={{fontSize:11, color: Colors.white, paddingHorizontal:2}}>10</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Calls"
                component={Call}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'call' : 'call_gray', width: 23.39, height: 25.34 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="People"
                component={People}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'people' : 'people_gray', width: 23.39, height: 25.34 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={Images.avatar} style={{ height: 29, width: 29 }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}