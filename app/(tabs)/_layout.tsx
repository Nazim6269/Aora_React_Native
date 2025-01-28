import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { icons } from "@/constants";
import { fontFamily } from "@/assets/colors/Colors";

const TabIcon = ({
  color,
  icon,
  focused,
  name,
}: {
  color: string;
  icon: string;
  focused: boolean;
  name: string;
}) => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.icons}
        source={icon}
        resizeMode="contain"
        tintColor={color}
      />
      <Text style={focused ? styles.textBold : styles.text}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={icons.home}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={icons.plus}
                focused={focused}
                name="Create"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmarks"
          options={{
            headerShown: false,
            title: "Bookmarks",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={icons.bookmark}
                focused={focused}
                name="Marks"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={icons.profile}
                focused={focused}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
  },
  text: { fontSize: 10, color: "#ffffff" },
  textBold: {
    fontFamily: `${fontFamily.pregular}`,
    fontWeight: "bold",
    fontSize: 10,
    color: "#ffffff",
  },
  icons: {
    height: 18,
    width: 18,
  },
});
