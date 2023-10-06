import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgQuiet = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 295.996 295.996"
    style={{
      enableBackground: "new 0 0 295.996 295.996",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M147.998 0C66.392 0 0 66.392 0 147.998s66.392 147.998 147.998 147.998 147.998-66.392 147.998-147.998S229.605 0 147.998 0zm0 279.996c-36.256 0-69.143-14.696-93.022-38.44a132.713 132.713 0 0 1-23.934-32.42C21.442 190.847 16 170.048 16 147.998 16 75.214 75.214 16 147.998 16c34.523 0 65.987 13.328 89.533 35.102 12.208 11.288 22.289 24.844 29.558 39.997 8.27 17.238 12.907 36.537 12.907 56.899 0 72.784-59.214 131.998-131.998 131.998z" />
    <Circle cx={98.498} cy={115.998} r={16} />
    <Circle cx={197.498} cy={115.998} r={16} />
    <Path d="M166.664 188.997v14h16v-14h39v14h16v-44h-16v14h-39v-14h-16v14h-39v-14h-16v14h-39v-14h-16v44h16v-14h39v14h16v-14z" />
  </Svg>
);

export default SvgQuiet;
