import PreviewCard from "@/components/animeCard/previewCard";
import { Link } from "expo-router";
import { Image, Pressable, useWindowDimensions } from "react-native";

interface AnimeCardProps {
  smallCard?: boolean;
}

export default function AnimeCard({ smallCard = false }: AnimeCardProps) {
  const { width: screenWidth } = useWindowDimensions();
  const padding = 24 * 2;
  const gap = 2;
  const imagewidth = smallCard ? 127 : (screenWidth - padding - gap) / 2;
  const imageRatio = 1.4;
  const imageHeight = smallCard ? 127 * imageRatio : imagewidth * imageRatio;

  const borderRadius = 12;

  return (
    <Link
      href="/[id]"
      dismissTo={false}
      asChild
      style={{ borderRadius: borderRadius }}
    >
      <Link.Trigger>
        <Pressable>
          <Image
            source={require("../../assets/img.png")}
            style={{
              width: imagewidth,
              height: imageHeight,
              borderRadius: borderRadius
            }}
          />
        </Pressable>
      </Link.Trigger>
      <Link.Preview
        style={{
          height: 250
        }}
      >
        <PreviewCard />
      </Link.Preview>
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
  );
}
