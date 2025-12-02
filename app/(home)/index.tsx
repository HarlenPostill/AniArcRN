import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { Link } from "expo-router";

export default function Layout() {
  return (
    <Body>
      <ThemedView style={{ flexGrow: 1, paddingHorizontal: 16 }}>
        <Link href="/modal" asChild>
          <ThemedText type="default">Spawn Modal</ThemedText>
        </Link>
        <Link href="/[id]" dismissTo={false} asChild>
          <Link.Trigger>
            <Link href="/[id]" asChild>
              <ThemedText type="default">Go to ID</ThemedText>
            </Link>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Plan to Watch"
              icon="bookmark.fill"
              onPress={() => console.log("1")}
            />
            <Link.MenuAction
              title="Watching"
              icon="eyes.inverse"
              onPress={() => console.log("2")}
            />
            <Link.MenuAction
              isOn
              title="Completed"
              icon="checkmark.rectangle.stack.fill"
              onPress={() => console.log("3")}
            />
            <Link.MenuAction
              title="On Hold"
              icon="phone.badge.clock.fill"
              onPress={() => console.log("4")}
            />
            <Link.MenuAction
              title="Dropped"
              icon="figure.fall"
              onPress={() => console.log("5")}
            />
            <Link.MenuAction
              title="Remove from List"
              destructive
              icon="trash.fill"
              onPress={() => console.log("5")}
            />
          </Link.Menu>
        </Link>
      </ThemedView>
    </Body>
  );
}
