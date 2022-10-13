import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
const HomeStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="home"
                component={Home}
                options={{
                    title: "accueil",
                    headerLeft: () => (
                        <MaterialIcons
                            name="menu"
                            size={24}
                            color="blue"
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
};
