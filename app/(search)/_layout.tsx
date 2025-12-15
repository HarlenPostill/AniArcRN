import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="search"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Explore",
          headerTintColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint,
          headerStyle: { backgroundColor: "transparent" },
          headerSearchBarOptions: {},
          headerRight: () => (
            <Pressable
              style={{
                marginLeft: 4,
                marginBottom: 4
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
          )
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerLargeTitleStyle: { color: "transparent" }
        }}
      />
    </Stack>
  );
}
