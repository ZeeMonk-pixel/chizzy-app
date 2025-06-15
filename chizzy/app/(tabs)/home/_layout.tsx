import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useAuth } from "@/app/context/context";

type Props = {};

const HomeLayout = (props: Props) => {
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="available-riders" options={{ headerShown: false }} />
        <Stack.Screen name="meet-rider" options={{ headerShown: false }} />
        <Stack.Screen name="arrived" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default HomeLayout;
