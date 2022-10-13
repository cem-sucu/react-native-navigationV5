import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./routes/DrawerNav";
import { HomeStackScreen } from "./routes/HomeStackNav";
import { PortfolioStackScreen } from "./routes/PortfolioStackNav";

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{ title: "Accueil", headerShown: false }}
                />
                <Drawer.Screen
                    name="Portfolio"
                    component={PortfolioStackScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
