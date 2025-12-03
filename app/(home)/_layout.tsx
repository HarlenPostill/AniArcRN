import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerLargeStyle: { backgroundColor: "transparent" },
          headerStyle: { backgroundColor: "transparent" },
          title: "Home",
          headerRight: () => (
            <Pressable
              style={{
                marginLeft: 4,
                marginBottom: 0,
              }}
              onPress={() => {
                console.log("Random press");
              }}
            >
              <IconSymbol
                size={28}
                name="dice.fill"
                color={Colors[colorScheme ?? "light"].text}
              />
            </Pressable>
          ),
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
          headerLargeTitleStyle: { color: "transparent" },
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          title: "Images",
          contentStyle: { backgroundColor: "transparent" },
          headerShown: true,
          headerTransparent: true,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
