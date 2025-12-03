import { useState } from "react";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { ContextMenu, Host, Picker } from "@expo/ui/swift-ui";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function Layout() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="saved"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Saved",
          headerRight: () => (
            <Host
              style={{
                marginLeft: 4,
                marginBottom: 0
              }}
            >
              <ContextMenu>
                <ContextMenu.Items>
                  <Picker
                    label="Sort By"
                    options={[
                      "Watching",
                      "Completed",
                      "On Hold",
                      "Dropped",
                      "Plan to Watch"
                    ]}
                    variant="menu"
                    selectedIndex={selectedIndex}
                    onOptionSelected={({ nativeEvent: { index } }) =>
                      setSelectedIndex(index)
                    }
                  />
                </ContextMenu.Items>
                <ContextMenu.Trigger>
                  <IconSymbol
                    size={28}
                    name="slider.horizontal.3"
                    color={Colors[colorScheme ?? "light"].text}
                  />
                </ContextMenu.Trigger>
              </ContextMenu>
            </Host>
          )
        }}
      />
    </Stack>
  );
}
