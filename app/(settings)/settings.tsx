import { ReactNode } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Pressable, Switch, ViewStyle, useColorScheme } from "react-native";

const sectionStyle: ViewStyle = {
  flexGrow: 1,
  padding: 12,
  borderRadius: 10,
  gap: 10
};

const rowStyle: ViewStyle = {
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  padding: 12,
  borderRadius: 10
};

export function SettingsCard({
  children,
  style
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  return (
    <ThemedView
      hasBackground
      lightColor={Colors.light.lighterGrey}
      darkColor={Colors.dark.lighterGrey}
      style={[sectionStyle, style]}
    >
      {children}
    </ThemedView>
  );
}

export function SettingsSection({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <SettingsCard>
      <ThemedText type="defaultSemiBold">{title}</ThemedText>
      <ThemedText>{description}</ThemedText>
    </SettingsCard>
  );
}

function SettingsRow({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <SettingsCard style={rowStyle}>
      <ThemedText>{label}</ThemedText>
      {children}
    </SettingsCard>
  );
}

function SettingsPressableRow({
  label,
  onPress,
  linksOut
}: {
  label: string;
  onPress: () => void;
  linksOut?: boolean;
}) {
  const colorScheme = useColorScheme();
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { transform: [{ scale: 0.98 }], opacity: 0.7 } : {}
      }
      onPress={onPress}
    >
      <SettingsCard style={rowStyle}>
        <ThemedText>{label}</ThemedText>
        <IconSymbol
          size={linksOut ? 16 : 20}
          name={linksOut ? "arrow.up.right" : "arrow.forward"}
          color={colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint}
        />
      </SettingsCard>
    </Pressable>
  );
}

function SettingsSwitch({
  value,
  onValueChange
}: {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}) {
  const colorScheme = useColorScheme();
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false:
          colorScheme === "dark"
            ? Colors.dark.background
            : Colors.light.background,
        true: colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
      }}
    />
  );
}

export default function Layout() {
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
          title="Play Button"
          description="Add a configurable play button to the detailed view of any show. Link to existing streaming service or a custom service with the service builder"
        />
        <SettingsRow label="Enable Play Button">
          <SettingsSwitch />
        </SettingsRow>
        <SettingsPressableRow
          label="Configure Play Button"
          onPress={() => router.push("/(settings)/playButton")}
        />

        <SettingsSection
          title="App Theme"
          description="Set the theme of the app on your device"
        />
        <SettingsPressableRow
          label="Configure App Theme"
          onPress={() => console.log("pressed")}
        />

        <SettingsSection
          title="Show Preferences"
          description="Default settings for saving, rating and viewing shows within the app"
        />
        <SettingsRow label="Prefer English Titles">
          <SettingsSwitch value={true} />
        </SettingsRow>
        <SettingsPressableRow
          label="Configure Rating System"
          onPress={() => console.log("pressed")}
        />
        <SettingsPressableRow
          linksOut
          label="Privacy Policy"
          onPress={() => console.log("pressed")}
        />
        <SettingsPressableRow
          linksOut
          label="Terms of Service"
          onPress={() => console.log("pressed")}
        />
        <SettingsSection
          title="Legal Jargon"
          description="© 2026 HRLN Interactive.
          
All rights reserved. AniArc and its logo are trademarks of HRLN Interactive."
        />
      </ThemedView>
    </Body>
  );
}
