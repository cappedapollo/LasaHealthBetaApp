import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgHappy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 295.996 295.996"
    style={{
      enableBackground: "new 0 0 295.996 295.996",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M147.998 0C66.392 0 0 66.392 0 147.998s66.392 147.998 147.998 147.998 147.998-66.392 147.998-147.998S229.604 0 147.998 0zm0 279.996c-36.257 0-69.143-14.696-93.022-38.44a132.713 132.713 0 0 1-23.934-32.42C21.442 190.847 16 170.047 16 147.998 16 75.214 75.214 16 147.998 16c34.523 0 65.987 13.328 89.533 35.102 12.208 11.288 22.289 24.844 29.558 39.996 8.27 17.239 12.907 36.538 12.907 56.9 0 72.784-59.214 131.998-131.998 131.998z" />
    <Path d="M239.996 147.997h-16c0 42-34.093 75.998-75.998 75.998S72 189.997 72 147.997H56c0 51 41.271 91.998 91.998 91.998 50.728 0 91.998-40.998 91.998-91.998z" />
    <Circle cx={98.666} cy={114.998} r={16} />
    <Circle cx={197.666} cy={114.998} r={16} />
  </Svg>
);

export default SvgHappy;