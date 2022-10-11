import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Portfolio" component={Portfolio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
