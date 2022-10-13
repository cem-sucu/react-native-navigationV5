import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
export const HomeStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Accueil",
                    headerLeft: () => (
                        <MaterialIcons
                            name="menu"
                            size={24}
                            color="black"
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
};
