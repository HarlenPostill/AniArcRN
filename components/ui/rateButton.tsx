import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Button, ContextMenu, Host } from "@expo/ui/swift-ui";
import { useColorScheme } from "react-native";

export default function RateButton() {
  const colorScheme = useColorScheme();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const ratingOptions = [
    "10 (Masterpiece)",
    "9 (Excellent)",
    "8 (Great)",
    "7 (Good)",
    "6 (Fine)",
    "5 (Average)",
    "4 (Poor)",
    "3 (Bad)",
    "2 (Very Bad)",
    "1 (Terrible)"
  ];

  return (
    <Host>
      <ContextMenu>
        <ContextMenu.Items>
          {ratingOptions.map((option, index) => (
            <Button
              key={index}
              systemImage="star.fill"
              onPress={() => {
                setSelectedIndex(index);
                console.log(`Selected: ${option}`);
              }}
            >
              {option}
            </Button>
          ))}
          <Button
            systemImage="trash.fill"
            onPress={() => {
              setSelectedIndex(-1);
              console.log(`Selected: Clear Rating`);
            }}
          >
            Clear Rating
          </Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <ThemedView
            hasBackground
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              borderRadius: 8,
              gap: 6
            }}
          >
            <IconSymbol
              name="star.fill"
              size={18}
              color={
                colorScheme === "dark"
                  ? Colors.dark.background
                  : Colors.light.background
              }
            />
            <ThemedText
              lightColor={Colors.light.background}
              darkColor={Colors.dark.background}
              type="defaultSemiBold"
            >
              {selectedIndex >= 0
                ? ratingOptions[selectedIndex].split(" ")[0]
                : "Rate"}
            </ThemedText>
          </ThemedView>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
