import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

type Props = {};

const AuthLayout = (props: Props) => {
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
        <Stack.Screen name="signup-choice" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="continue-signup" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
