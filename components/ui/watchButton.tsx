import { useEffect, useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Button, ContextMenu, Host } from "@expo/ui/swift-ui";
import { View } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import type { SFSymbols6_0 } from "sf-symbols-typescript";

export type WatchStatus =
  | "watching"
  | "plan_to_watch"
  | "completed"
  | "on_hold"
  | "dropped"
  | null;

interface WatchButtonProps {
  totalEpisodes: number;
  currentEpisode?: number;
  status?: WatchStatus;
  onStatusChange?: (status: WatchStatus) => void;
  onEpisodeChange?: (episode: number) => void;
}

const statusLabels: Record<Exclude<WatchStatus, null>, string> = {
  watching: "Watching",
  plan_to_watch: "Plan to Watch",
  completed: "Completed",
  on_hold: "On Hold",
  dropped: "Dropped"
};

const statusIcons: Record<Exclude<WatchStatus, null>, SFSymbols6_0> = {
  watching: "play.fill",
  plan_to_watch: "clock.fill",
  completed: "checkmark.circle.fill",
  on_hold: "pause.fill",
  dropped: "xmark.circle.fill"
};

function AddToListButton({
  onStatusSelect,
  tintColor
}: {
  onStatusSelect: (status: WatchStatus) => void;
  tintColor: string;
}) {
  return (
    <Host>
      <ContextMenu>
        <ContextMenu.Items>
          {(Object.keys(statusLabels) as Exclude<WatchStatus, null>[]).map(
            key => (
              <Button
                key={key}
                systemImage={statusIcons[key]}
                onPress={() => onStatusSelect(key)}
              >
                {statusLabels[key]}
              </Button>
            )
          )}
        </ContextMenu.Items>
        <ContextMenu.Trigger>
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
              gap: 6
            }}
          >
            <ThemedText
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              type="defaultSemiBold"
            >
              Add to List
            </ThemedText>
            <IconSymbol name="plus" size={18} color={tintColor} />
          </ThemedView>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}

function ActiveWatchButton({
  status,
  currentEpisode,
  totalEpisodes,
  onStatusSelect,
  onRemove,
  onEpisodeSelect,
  tintColor,
  bgColor
}: {
  status: Exclude<WatchStatus, null>;
  currentEpisode: number;
  totalEpisodes: number;
  onStatusSelect: (status: WatchStatus) => void;
  onRemove: () => void;
  onEpisodeSelect: (ep: number) => void;
  tintColor: string;
  bgColor: string;
}) {
  const episodeOptions = Array.from({ length: totalEpisodes + 1 }, (_, i) => i);

  return (
    <ThemedView
      hasBackground
      lightColor={Colors.light.tint}
      darkColor={Colors.dark.tint}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 8,
        borderRadius: 8,
        gap: 8
      }}
    >
      {/* Status selector */}
      <Host>
        <ContextMenu>
          <ContextMenu.Items>
            {(Object.keys(statusLabels) as Exclude<WatchStatus, null>[]).map(
              key => (
                <Button
                  key={key}
                  systemImage={statusIcons[key]}
                  onPress={() => onStatusSelect(key)}
                >
                  {statusLabels[key]}
                </Button>
              )
            )}
            <Button
              systemImage="trash.fill"
              role="destructive"
              onPress={onRemove}
            >
              Remove from List
            </Button>
          </ContextMenu.Items>
          <ContextMenu.Trigger>
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
                backgroundColor: bgColor,
                gap: 6
              }}
            >
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                type="defaultSemiBold"
              >
                {statusLabels[status]}
              </ThemedText>
              <IconSymbol name="chevron.down" size={14} color={tintColor} />
            </ThemedView>
          </ContextMenu.Trigger>
        </ContextMenu>
      </Host>

      {/* Episode counter */}
      <Host>
        <ContextMenu>
          <ContextMenu.Items>
            {episodeOptions.map(ep => (
              <Button
                key={ep}
                systemImage={
                  ep === currentEpisode
                    ? "checkmark"
                    : ("number.circle" as SFSymbols6_0)
                }
                onPress={() => onEpisodeSelect(ep)}
              >
                {`${ep}/${totalEpisodes}`}
              </Button>
            ))}
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6
              }}
            >
              <ThemedText
                lightColor={Colors.light.background}
                darkColor={Colors.dark.background}
                type="defaultSemiBold"
              >
                {currentEpisode}/{totalEpisodes}
              </ThemedText>
              <IconSymbol name="plus" size={18} color={bgColor} />
            </View>
          </ContextMenu.Trigger>
        </ContextMenu>
      </Host>
    </ThemedView>
  );
}

export default function WatchButton({
  totalEpisodes,
  currentEpisode: currentEpisodeProp,
  status: statusProp,
  onStatusChange,
  onEpisodeChange
}: WatchButtonProps) {
  const colorScheme = useColorScheme();

  // Internal state that syncs with props
  const [internalStatus, setInternalStatus] = useState<WatchStatus>(
    statusProp ?? null
  );
  const [internalEpisode, setInternalEpisode] = useState(
    currentEpisodeProp ?? 0
  );

  // Use prop values if provided, otherwise use internal state
  const status = statusProp !== undefined ? statusProp : internalStatus;
  const currentEpisode =
    currentEpisodeProp !== undefined ? currentEpisodeProp : internalEpisode;

  const isActive = status !== null;

  // Animation values
  const expandWidth = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    expandWidth.value = withTiming(isActive ? 1 : 0, { duration: 300 });
  }, [isActive]);

  const episodeContainerStyle = useAnimatedStyle(() => ({
    opacity: expandWidth.value,
    width: expandWidth.value * 80,
    overflow: "hidden"
  }));

  const handleStatusSelect = (newStatus: WatchStatus) => {
    setInternalStatus(newStatus);
    onStatusChange?.(newStatus);
    if (newStatus === "completed") {
      setInternalEpisode(totalEpisodes);
      onEpisodeChange?.(totalEpisodes);
    }
  };

  const handleRemoveFromList = () => {
    setInternalStatus(null);
    setInternalEpisode(0);
    onStatusChange?.(null);
    onEpisodeChange?.(0);
  };

  const handleEpisodeSelect = (episode: number) => {
    setInternalEpisode(episode);
    onEpisodeChange?.(episode);
    if (episode === totalEpisodes && status !== "completed") {
      setInternalStatus("completed");
      onStatusChange?.("completed");
    }
  };

  const tintColor =
    colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint;
  const bgColor =
    colorScheme === "dark" ? Colors.dark.background : Colors.light.background;

  return (
    <Host>
      {!isActive ? (
        <AddToListButton
          onStatusSelect={handleStatusSelect}
          tintColor={tintColor}
        />
      ) : (
        <ActiveWatchButton
          status={status}
          currentEpisode={currentEpisode}
          totalEpisodes={totalEpisodes}
          onStatusSelect={handleStatusSelect}
          onRemove={handleRemoveFromList}
          onEpisodeSelect={handleEpisodeSelect}
          tintColor={tintColor}
          bgColor={bgColor}
        />
      )}
    </Host>
  );
}
