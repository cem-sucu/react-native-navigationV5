import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Profil from "../screens/Profil";
import Listes from "../screens/Listes";
import Sujets from "../screens/Sujets";
import Signets from "../screens/Signet";
import Moments from "../screens/Moments";
import Settings from "../screens/Settings";
import Discover from "../screens/Discover";
import Gozat from "../screens/Gozat";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <MaterialIcons
                        style={styles.toggle}
                        name="menu"
                        size={24}
                        color="blue"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerBackTitleStyle: "red",
            }}
        >
            <HomeStack.Screen
                name="homeb"
                component={Home}
                options={{
                    title: "Accueil",
                }}
            />
            <HomeStack.Screen name="Profil" component={Profil} />
            <HomeStack.Screen name="Listes" component={Listes} />
            <HomeStack.Screen name="Sujets" component={Sujets} />
            <HomeStack.Screen name="Signets" component={Signets} />
            <HomeStack.Screen name="Moments" component={Moments} />
            <HomeStack.Screen name="Settings" component={Settings} />
            <HomeStack.Screen name="Discover" component={Discover} />
            <HomeStack.Screen name="gozat" component={Gozat} />
        </HomeStack.Navigator>
    );
};

const styles = StyleSheet.create({
    toggle: {
        marginLeft: 20,
    },
});

export default HomeStackScreen;
