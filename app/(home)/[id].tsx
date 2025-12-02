import {
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { useState } from "react";

export default function TabTwoScreen() {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: `really long name`,
        }}
      />
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
              resizeMode: "cover",
            }}
          />
          <View style={{ flexGrow: 1, justifyContent: "center", gap: 12 }}>
            <ThemedText style={{ wordWrap: "break-word" }} type="subtitle">
              The Boy and the Heron
            </ThemedText>
            <View
              style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
            >
              <ThemedView
                hasBackground
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: 8,
                  gap: 6,
                }}
              >
                <IconSymbol
                  name="star.fill"
                  size={18}
                  color={
                    colorScheme === "dark"
                      ? Colors.dark.background
                      : Colors.light.background
                  }
                />
                <ThemedText
                  lightColor={Colors.light.background}
                  darkColor={Colors.dark.background}
                  type="defaultSemiBold"
                >
                  9
                </ThemedText>
              </ThemedView>
              <ThemedView
                hasBackground
                useStrokeInstead
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: 8,
                  gap: 6,
                }}
              >
                <ThemedText
                  lightColor={Colors.light.tint}
                  darkColor={Colors.dark.tint}
                  type="defaultSemiBold"
                >
                  Add to List
                </ThemedText>
                <IconSymbol
                  name="plus"
                  size={18}
                  color={
                    colorScheme === "dark"
                      ? Colors.dark.tint
                      : Colors.light.tint
                  }
                />
              </ThemedView>
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
            borderRadius: 12,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexGrow: 1,
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
              flexGrow: 1,
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
              flexGrow: 1,
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
        <ThemedView
          hasBackground
          lightColor={Colors.light.lighterGrey}
          darkColor={Colors.dark.lighterGrey}
          style={{
            padding: 10,
            alignItems: "stretch",
            borderRadius: 12,
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
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "150%",
    resizeMode: "cover",
  },
});
