import type { SvgProps } from "react-native-svg";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const Netflix = (props: SvgProps) => (
  <Svg viewBox="0 0 551.111 1000" {...props}>
    <Defs>
      <LinearGradient
        id="netflix_icon-linearGradient13368"
        x1="78.234"
        x2="221.663"
        y1="423.767"
        y2="365.092"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor="#e50914" />
        <Stop offset="100%" stopColor="#e50914" />
      </LinearGradient>
      <LinearGradient
        id="netflix_icon-linearGradient35889"
        x1="456.365"
        x2="309.676"
        y1="521.56"
        y2="583.495"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor="#e50914" />
        <Stop offset="100%" stopColor="#e50914" />
      </LinearGradient>
    </Defs>
    <Path
      d="M-1.152-1.152 2.305 1002.67c73.273-14.111 130.892-12.569 195.924-18.44V0Z"
      fill="url(#netflix_icon-linearGradient13368)"
    />
    <Path
      d="M353.816 0h199.381l2.305 1000.365-202.839-33.422z"
      fill="url(#netflix_icon-linearGradient35889)"
    />
    <Path
      d="M1.152 0c4.61 11.525 345.749 981.925 345.749 981.925 56.056-.4 131.219 8.754 205.144 17.288L197.077 0Z"
      fill="#e50914"
    />
  </Svg>
);

export { Netflix };
