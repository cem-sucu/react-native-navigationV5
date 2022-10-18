import React from "react";
import {StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./routes/DrawerNav";
import { MaterialIcons } from "@expo/vector-icons";
import CustomsDrawerContent from "./components/CustomsDrawerContent";
import BottomTabNav from "./routes/BottomTabNav";



export default function App() {
    StatusBar.setBarStyle('light-content', true)
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomsDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Home"
                    component={BottomTabNav}
                    options={{
                        title: "Accueil",
                        headerShown: false,
                        drawerIcon: () => (
                            <MaterialIcons
                                name="home"
                                size={24}
                                color="royalblue "
                            />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
