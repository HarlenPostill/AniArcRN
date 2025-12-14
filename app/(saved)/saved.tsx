import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import RateButton from "@/components/ui/rateButton";

export default function Layout() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Body>
      <ThemedView style={{ flexGrow: 1, padding: 16 }}>
        <ThemedText type="default">Saved Items</ThemedText>
        <RateButton />
      </ThemedView>
    </Body>
  );
}
