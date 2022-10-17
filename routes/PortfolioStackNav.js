import { createStackNavigator } from "@react-navigation/stack";
import Profil from "../screens/Profil";
import { MaterialIcons } from "@expo/vector-icons";
const PortfolioStack = createStackNavigator();

const PortfolioStackScreen = ({ navigation }) => {
    return (
        <PortfolioStack.Navigator>
            <PortfolioStack.Screen
                name="Home"
                component={Profil}
                options={{
                    title: "Profil",
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
        </PortfolioStack.Navigator>
    );
};

export default PortfolioStackScreen;
