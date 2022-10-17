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
            }}
        >
            <HomeStack.Screen
                name="home"
                component={Home}
                options={{
                    title: "accueil",
                }}
            />
            <HomeStack.Screen name="Profil" component={Profil} />
            <HomeStack.Screen name="Listes" component={Listes} />
            <HomeStack.Screen name="Sujets" component={Sujets} />
            <HomeStack.Screen name="Signets" component={Signets} />
            <HomeStack.Screen name="Moments" component={Moments} />
            <HomeStack.Screen name="Settings" component={Settings} />
        </HomeStack.Navigator>
    );
};

const styles = StyleSheet.create({
    toggle: {
        marginLeft: 20,
    },
});

export default HomeStackScreen;
