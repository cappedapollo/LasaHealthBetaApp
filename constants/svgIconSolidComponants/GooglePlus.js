import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGooglePlus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm161.682 342.682C97.509 342.682 46.5 291.672 46.5 227.5s51.009-115.182 115.182-115.182c31.264 0 57.591 11.518 77.336 31.264L207.754 173.2c-8.227-8.227-23.036-18.1-46.073-18.1-39.49 0-70.754 32.909-70.754 72.4s31.264 72.4 70.754 72.4c46.073 0 62.527-32.909 65.818-49.364h-65.818v-39.491h108.6c1.646 6.582 1.646 11.518 1.646 19.746.001 65.818-44.427 111.891-110.245 111.891zM408.5 243.955h-32.909v32.909h-32.91v-32.909h-32.909v-32.909h32.909v-32.909h32.91v32.909H408.5v32.909z"
    />
  </Svg>
);

export default SvgGooglePlus;
