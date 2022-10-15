import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./routes/DrawerNav";
import { PortfolioStackScreen } from "./routes/PortfolioStackNav";
import { MaterialIcons } from "@expo/vector-icons";
import BottomTabNav from "./routes/BottomTabNav";

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
                    name="Homeon"
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
                <Drawer.Screen
                    name="Profil"
                    component={PortfolioStackScreen}
                    options={{ title: "portfolio", headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
