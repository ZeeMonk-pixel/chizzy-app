import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import {
  AuthProvider,
  RideProvider,
  TokenProvider,
  UserProvider,
} from "./context/context";
import { NotificationProvider } from "@/context/NotificationContext";
import * as Notifications from "expo-notifications";
// import * as TaskManager from "expo-task-manager";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

// Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <TokenProvider>
        <UserProvider>
          <NotificationProvider>
            <AuthProvider>
              <RideProvider>
                <StatusBar translucent backgroundColor="transparent" />
                <Stack
                  screenOptions={{
                    animation: "slide_from_right",
                    contentStyle: {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  <Stack.Screen name="index" options={{ headerShown: false }} />
                  <Stack.Screen
                    name="(auth)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                </Stack>
              </RideProvider>
            </AuthProvider>
          </NotificationProvider>
        </UserProvider>
      </TokenProvider>
    </>
  );
}
