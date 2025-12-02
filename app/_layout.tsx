import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Pressable } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: false,
            headerTransparent: true,
            headerBackTitle: "Back",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerBlurEffect: "none",
            headerRight: () => (
              <Pressable
                style={{
                  marginLeft: 4,
                  marginBottom: 4,
                }}
                onPress={() => {
                  console.log("share press");
                }}
              >
                <IconSymbol
                  size={28}
                  name="square.and.arrow.up"
                  color={Colors[colorScheme ?? "light"].text}
                />
              </Pressable>
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            title: "Modal",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: { backgroundColor: "transparent" },
            headerLargeTitle: false,
            headerShown: false,
            sheetAllowedDetents: [0.25, 0.6],
            sheetGrabberVisible: true,
            presentation: "formSheet",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
