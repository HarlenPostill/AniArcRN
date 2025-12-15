import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Netflix } from "@/components/ui/svgs/netflix";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import { SettingsSection } from "./settings";

type PresetId = "netflix" | "prime";

interface Preset {
  id: PresetId;
  label: string;
  icon: React.ReactNode;
}

export default function Layout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState<PresetId>("prime");

  const tint = colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint;
  const background =
    colorScheme === "dark" ? Colors.dark.background : Colors.light.background;

  const presets: Preset[] = [
    {
      id: "netflix",
      label: "Netflix",
      icon: <Netflix width={20} height={20} />
    },
    {
      id: "prime",
      label: "Prime Video",
      icon: <IconSymbol name="video.square.fill" color={tint} />
    }
  ];

  return (
    <Body>
      <ThemedView
        style={{
          flexGrow: 1,
          padding: 16,
          gap: 12,
          justifyContent: "space-between"
        }}
      >
        <SettingsSection
          title="Play Button Builder"
          description="Dynamically construct links to get watch your shows on your preferred service. 
          
If a custom service is selected the play button will appear every time, but if a preset service is selected it will only appear when the show is available on that service"
        />
        <ThemedText type="subtitle">Presets</ThemedText>
        {presets.map(preset => {
          const isSelected = selectedPreset === preset.id;
          return (
            <Pressable
              key={preset.id}
              onPress={() => setSelectedPreset(preset.id)}
            >
              <ThemedView
                hasBackground={isSelected}
                useStrokeInstead={!isSelected}
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                style={{
                  padding: 8,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{
                    gap: 8,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 4,
                      boxShadow: "inset 0 0 4px 0px rgba(255, 255, 255)",
                      flexShrink: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: background
                    }}
                  >
                    {preset.icon}
                  </View>
                  <ThemedText
                    lightColor={
                      isSelected ? Colors.light.background : Colors.light.tint
                    }
                    darkColor={
                      isSelected ? Colors.dark.background : Colors.dark.tint
                    }
                  >
                    {preset.label}
                  </ThemedText>
                </View>
                <IconSymbol
                  name={isSelected ? "checkmark.circle" : "circle"}
                  color={isSelected ? background : tint}
                />
              </ThemedView>
            </Pressable>
          );
        })}

        {/* Add Service Link */}
        <Pressable onPress={() => router.push("/(settings)/addService")}>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{
              padding: 8,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                gap: 8,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  boxShadow: "inset 0 0 4px 0px rgba(255, 255, 255)",
                  flexShrink: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: background
                }}
              >
                <IconSymbol name="plus" color={tint} />
              </View>
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
              >
                Add Service
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" color={tint} />
          </ThemedView>
        </Pressable>
      </ThemedView>
    </Body>
  );
}
