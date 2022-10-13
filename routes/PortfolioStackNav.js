import { createStackNavigator } from "@react-navigation/stack";
import Portfolio from "../screens/Portfolio";
import { MaterialIcons } from "@expo/vector-icons";
export const PortfolioStack = createStackNavigator();

export const PortfolioStackScreen = ({navigation}) => {
    return (
        <PortfolioStack.Navigator>
            <PortfolioStack.Screen
                name="Home"
                component={Portfolio}
                options={{
                    title: "Portfolio",
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
