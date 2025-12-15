import { useState } from "react";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import RateButton from "@/components/ui/rateButton";
import WatchButton from "@/components/ui/watchButton";
import { Colors } from "@/constants/theme";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  useColorScheme
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { IconSymbol } from "../ui/icon-symbol";
import AnimeCard from "./animeCard";

export default function DetailedView() {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorScheme = useColorScheme();

  const insets = useSafeAreaInsets();
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Image
            source={require("../../assets/img.png")}
            style={styles.headerImage}
          />
        }
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Image
            source={require("../../assets/img.png")}
            style={{
              width: 100,
              height: 140,
              borderRadius: 12,
              resizeMode: "cover"
            }}
          />
          <View style={{ flexGrow: 1, justifyContent: "center", gap: 12 }}>
            <ThemedText style={{ wordWrap: "break-word" }} type="subtitle">
              The Boy and the Heron
            </ThemedText>
            <View
              style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
            >
              <RateButton />
              <WatchButton totalEpisodes={12} />
            </View>
          </View>
        </View>
        <ThemedView
          hasBackground
          lightColor={Colors.light.lighterGrey}
          darkColor={Colors.dark.lighterGrey}
          style={{
            flexDirection: "row",
            gap: 10,
            padding: 10,
            alignItems: "stretch",
            borderRadius: 12
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexGrow: 1
            }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Year
            </ThemedText>
            <ThemedText type="subtitle">2025</ThemedText>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexGrow: 1
            }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Year
            </ThemedText>
            <ThemedText type="subtitle">2025</ThemedText>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexGrow: 1
            }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Year
            </ThemedText>
            <ThemedText type="subtitle">2025</ThemedText>
          </View>
        </ThemedView>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{ padding: 4, borderRadius: 8 }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Isekai
            </ThemedText>
          </ThemedView>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{ padding: 4, borderRadius: 8 }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Romance
            </ThemedText>
          </ThemedView>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{ padding: 4, borderRadius: 8 }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Action
            </ThemedText>
          </ThemedView>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{ padding: 4, borderRadius: 8 }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Adventure
            </ThemedText>
          </ThemedView>
          <ThemedView
            useStrokeInstead
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{ padding: 4, borderRadius: 8 }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              School
            </ThemedText>
          </ThemedView>
        </View>
        <ThemedText type="subtitle">Synopsis</ThemedText>
        <ThemedView
          hasBackground
          lightColor={Colors.light.lighterGrey}
          darkColor={Colors.dark.lighterGrey}
          style={{
            padding: 10,
            alignItems: "stretch",
            borderRadius: 12
          }}
        >
          <ThemedText numberOfLines={isExpanded ? undefined : 5}>
            {
              "Esse fugiat nostrud  nostrud nostrud nostrud nostrud nostrud ut. Voluptate dolore laboris enim Lorem sit tempor aute ea consequat est. Amet excepteur in veniam laboris exercitation exercitation non fugiat est velit. Commodo eiusmod tempor culpa non ex officia aliqua cillum cupidatat cupidatat do non sit. Eiusmod enim nulla fugiat."
            }
          </ThemedText>
          {!isExpanded && (
            <Pressable onPress={() => setIsExpanded(true)}>
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                type="defaultSemiBold"
              >
                ...show more
              </ThemedText>
            </Pressable>
          )}
          {isExpanded && (
            <Pressable onPress={() => setIsExpanded(false)}>
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                type="defaultSemiBold"
              >
                ...show less
              </ThemedText>
            </Pressable>
          )}
        </ThemedView>
        <ThemedText type="subtitle">Similar Shows</ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ overflow: "visible" }}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 8
          }}
        >
          <AnimeCard smallCard />
          <AnimeCard smallCard />
          <AnimeCard smallCard />
        </ScrollView>
      </ParallaxScrollView>
      <Pressable
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.96 : 1 }],
          position: "absolute",
          zIndex: 10,
          bottom: insets.bottom + 60,
          right: insets.right + 20,
          width: 65,
          height: 65,
          borderRadius: 99,
          boxShadow: "inset 0 0 4px 0px rgba(255, 255, 255)",
          flexShrink: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
        })}
      >
        <IconSymbol name="play.fill" color={Colors.light.background} />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "150%",
    resizeMode: "cover"
  }
});
