import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import RateButton from "@/components/ui/rateButton";
import WatchButton from "@/components/ui/watchButton";

export default function Layout() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Body>
      <ThemedText type="default">Saved Items</ThemedText>
      <ThemedView
        style={{
          flexGrow: 1,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <RateButton />
        <WatchButton totalEpisodes={12} />
      </ThemedView>
    </Body>
  );
}
