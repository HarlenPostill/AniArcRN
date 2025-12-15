import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Settings",
          headerTintColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
        }}
      />
      <Stack.Screen
        name="playButton"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Play Button",
          headerTintColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
        }}
      />
      <Stack.Screen
        name="addService"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Add Service",
          headerTintColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
        }}
      />
    </Stack>
  );
}
