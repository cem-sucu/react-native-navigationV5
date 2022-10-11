import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Easing } from "react-native";

const Stack = createStackNavigator();

const openConfig = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 30,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
const closeConfig = {
    animation: "timing",
    config: {
        duration: 900,
        easing: Easing.ease,
    },
};

export default function App() {
    <StatusBar style="auto" />;
    return (
        <NavigationContainer>
            {/* // initialRouteName permet de séléctionné notre page principale
            <Stack.Navigator initialRouteName="Portfolio"> */}
            {/* screenoptions c'est comme option dans stack.screen avec le header en null permet d'enlever le header de toute les pages*/}
            {/* <Stack.Navigator screenOptions={{ header: () => null }}> */}
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "slateblue",
                    },
                    headerTitleStyle: {
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    },
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    transitionSpec: {
                        open: openConfig,
                        close: closeConfig,
                    },
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                {/* <Stack.Navigator> */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Accueil" }}
                />
                <Stack.Screen
                    name="Portfolio"
                    component={Portfolio}
                    /*  options={{ header: () => null }} // permet d'enlever le header, cela concernce uniquement la page Portfolio */
                    /*  options={{
                        headerStyle: {
                            backgroundColor: "slateblue",
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        },
                    }} */
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
