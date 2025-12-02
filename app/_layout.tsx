import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Icon, Label, NativeTabs } from "expo-router/build/native-tabs";
import React from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf={{ default: "house", selected: "house.fill" }} />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(saved)">
          <Icon sf={{ default: "book", selected: "book.fill" }} />
          <Label>Saved</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(search)" role="search">
          <Icon sf="magnifyingglass" />
          <Label>Explore</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
