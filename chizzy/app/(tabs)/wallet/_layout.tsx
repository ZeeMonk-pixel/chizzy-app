import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

type Props = {};

const WalletLayout = (props: Props) => {
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
        <Stack.Screen name="payment-receipt" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default WalletLayout;
