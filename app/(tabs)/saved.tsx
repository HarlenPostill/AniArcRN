import { Link, router } from "expo-router";
import { Button, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
            }}
          >
            Saved
          </ThemedText>
        </ThemedView>
        <Link href="/[id]" dismissTo={false} asChild>
          <Link.Trigger>
            <Button
              color={"#000"}
              title="Click Me"
              onPress={() => router.push("/[id]")}
            />
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
        <ThemedText>
          This app includes example code to help you get started.
        </ThemedText>
        <Button
          color={"#000"}
          title="Click Me"
          onPress={() => router.push("/modal")}
        />
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
