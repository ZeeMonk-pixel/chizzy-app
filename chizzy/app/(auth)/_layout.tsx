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
        <Stack.Screen name="passenger" options={{ headerShown: false }} />
        <Stack.Screen name="testnot" options={{ headerShown: false }} />
        <Stack.Screen name="instant-not" options={{ headerShown: false }} />
        <Stack.Screen name="complete-account" options={{ headerShown: false }} />
        <Stack.Screen name="pilot/pilot" options={{ headerShown: false }} />
        <Stack.Screen name="pilot/vehicle-details" options={{ headerShown: false }} />
        <Stack.Screen name="pilot/acc-details" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
