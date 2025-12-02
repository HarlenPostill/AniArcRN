import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";

export default function Layout() {
  return (
    <Body>
      <ThemedView style={{ flexGrow: 1, padding: 16 }}>
        <ThemedText type="default">Saved Items</ThemedText>
      </ThemedView>
    </Body>
  );
}
