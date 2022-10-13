import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./routes/DrawerNav";
import { HomeStackScreen } from "./routes/HomeStackNav";
import { PortfolioStackScreen } from "./routes/PortfolioStackNav";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{
                    backgroundColor: "#c6c",
                    width: 240,
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeStackScreen}
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
                <Drawer.Screen
                    name="Profil"
                    component={PortfolioStackScreen}
                    options={{ title: "Ma page", headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
