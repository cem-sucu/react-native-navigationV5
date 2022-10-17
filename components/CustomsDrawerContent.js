import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    Text,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const CustomsDrawerContent = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleDarktheme = () => {
        setIsDark(!isDark);
    };

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContentContainer}>
                    <View style={styles.userInfonContainer}>
                        <View style={styles.userInfonDetails}>
                            <Avatar.Image
                                source={{
                                    uri: "https://pixabay.com/get/g6f6e7fc90b9945b456ccdc6a4a382a9169e32cfd92d6ffd49c7e99ca987e8fb3e6ec4fb31caa5aad6c6d2d6a8f26cd20ba4dba60ab655d2f50daa5e9776c794ee3613b1d563757de872e50e18b0ca017_640.png",
                                }}
                                size={85}
                            />
                            <View style={styles.name}>
                                <Title style={styles.title}>Cemsi boy</Title>
                                <Caption style={styles.caption}>
                                    @cemsiboy
                                </Caption>
                            </View>
                        </View>
                        <View style={styles.followers}>
                            <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.section]}
                                >
                                    1
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Abonnement
                                </Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.section]}
                                >
                                    44 M
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Abonnés
                                </Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Profil"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="face"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() => props.navigation.navigate("Profil")}
                        />
                        <DrawerItem
                            label="Listes"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="list-alt"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() => props.navigation.navigate("Listes")}
                        />
                        <DrawerItem
                            label="Sujets"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="insert-comment"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() => props.navigation.navigate("Sujets")}
                        />
                        <DrawerItem
                            label="Signets"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="bookmark-border"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() => props.navigation.navigate("Signets")}
                        />
                        <DrawerItem
                            label="Moments"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="flash-on"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() => props.navigation.navigate("Moments")}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Réglages">
                        <DrawerItem
                            label="Paramètres de confidentialité"
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="settings"
                                    size={size}
                                    color={color}
                                />
                            )}
                            onPress={() =>
                                props.navigation.navigate("Settings")
                            }
                        />

                        <TouchableRipple onPress={() => toggleDarktheme()}>
                            <View style={styles.settings}>
                                <Text>Mode sombre</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.logOutSection}>
                <DrawerItem
                    label="Paramètres de confidentialité"
                    icon={({ color, size }) => (
                        <MaterialIcons
                            name="logout"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => alert("Déconnecter")}
                />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContentContainer: {
        flex: 1,
    },
    userInfonContainer: {
        paddingLeft: 20,
    },
    userInfonDetails: {
        marginTop: 15,
    },
    name: {
        marginTop: 15,
        justifyContent: "center",
    },
    title: {
        fontSize: 19,
        marginTop: 5,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 12,
    },
    followers: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 9,
    },
    paragraph: {
        fontWeight: "bold",
    },
    drawerSection: {
        marginTop: 19,
        borderTopWidth: 0.5,
        borderTopColor: "#cccc",
    },
    settings: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    logOutSection: {
        marginBottom: 20,
        borderTopWidth: 0.5,
        borderTopColor: "#cccc",
    },
});

export default CustomsDrawerContent;
