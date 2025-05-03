import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

type Props = {};

const ProfileLayout = (props: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="nots-pref" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ProfileLayout;
