import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./routes/DrawerNav";
import React from "react";
import { HomeStackScreen } from "./routes/HomeStackNav";
import { PortfolioStackScreen } from "./routes/PortfolioStackNav";


export default function App() {
    <StatusBar style="auto" />;
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{ title: "Accueil" }}
                />
                <Drawer.Screen
                    name="Portfolio"
                    component={PortfolioStackScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
