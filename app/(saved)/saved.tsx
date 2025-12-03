import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { Button, ContextMenu, Host, Picker } from '@expo/ui/swift-ui';
import { useState } from "react";

export default function Layout() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <Body>
      <ThemedView style={{ flexGrow: 1, padding: 16 }}>
        <ThemedText type="default">Saved Items</ThemedText>
        <Host style={{ width: 150, height: 50 }}>
          <ContextMenu>
            <ContextMenu.Items>
              <Button
                systemImage="person.crop.circle.badge.xmark"
                onPress={() => console.log('Pressed1')}>
                Hello
              </Button>
              <Button
                variant="bordered"
                systemImage="heart"
                onPress={() => console.log('Pressed2')}>
                Love it
              </Button>
              <Picker
                label="Doggos"
                options={['very', 'veery', 'veeery', 'much']}
                variant="menu"
                selectedIndex={selectedIndex}
                onOptionSelected={({ nativeEvent: { index } }) => setSelectedIndex(index)}
              />
            </ContextMenu.Items>
            <ContextMenu.Trigger>
              <Button variant="glass">
                Show Menu
              </Button>
            </ContextMenu.Trigger>
          </ContextMenu>
        </Host>
      </ThemedView>
    </Body>
  );
}
