import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type Props = {};

const TabsLayout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8441F1",
        tabBarInactiveTintColor: "#D0D0D0",
        tabBarLabelStyle: {
          fontFamily: "Inter_500Medium",
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#232533",
          height: 97,
          paddingTop: 15,
        },
        tabBarButton: (props) => <Pressable {...props} android_ripple={null} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={"home"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={"wallet"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false,
          tabBarLabel: "History",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={"document"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={"person-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
