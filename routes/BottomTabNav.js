import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackNav";
import Settings from "../screens/Settings";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={ ( { route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "HOME") {
                        iconName = "home";
                        size = focused ? 25 : 20;
                        // color = focused ? "green" : "grey";
                    } else if (route.name === "Settings") {
                        iconName = "setting";
                        size = focused ? 25 : 20;
                        // color = focused ? "green" : "grey";
                    }
                    return (
                        <AntDesign name={iconName} size={size} color={color} />
                    );
                },tabBarActiveTintColor: "green",
                tabBarInactiveBTintColor: "grey",
                // tabBarInactiveBackgroundColor: "#dddd"
                // tabBarShowLabel: false,
            })}
        
                
           
        >
            <Tab.Screen
                name="HOME"
                component={HomeStackScreen}
                options={{ title: "Accueil", headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ title: "Réglages", tabBarBadge: 1}}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default BottomTabNav;
