import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
const HomeStack = createStackNavigator();
import Portfolio from "../screens/Portfolio";
import Listes from "../screens/Listes";
import Sujets from "../screens/Sujets";
import Signets from "../screens/Signet";
import Moments from "../screens/Moments";


export const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <MaterialIcons
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
            <HomeStack.Screen name="Portfolio" component={Portfolio} />
            <HomeStack.Screen name="Listes" component={Listes} />
            <HomeStack.Screen name="Sujets" component={Sujets} />
            <HomeStack.Screen name="Signets" component={Signets} />
            <HomeStack.Screen name="Moments" component={Moments} />
            
        </HomeStack.Navigator>
    );
};
