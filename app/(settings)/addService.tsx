import { useState } from "react";

import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { Host, Picker } from "@expo/ui/swift-ui";
import { useColorScheme } from "react-native";

import { SettingsSection } from "./settings";

export default function Layout() {
  const colorScheme = useColorScheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);

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
          title="Import Service"
          description="Build out the service flow from scratch with the build service tool or import an existing service with a qr code"
        />
        <SettingsSection
          title="Service Name"
          description="Set the Name of the service to appear in the presets list"
        />
        <SettingsSection
          title="Data Type"
          description="How should we get information to redirect you to this service?"
        />
        <Host style={{ marginVertical: 16 }}>
          <Picker
            label="Data Type"
            options={["API Call + Redirect URL", "Redirect URL"]}
            selectedIndex={selectedIndex}
            onOptionSelected={event =>
              setSelectedIndex(event.nativeEvent.index)
            }
          />
        </Host>
        <SettingsSection
          title="Data Type"
          description="How should we get information to redirect you to this service?"
        />
      </ThemedView>
    </Body>
  );
}
