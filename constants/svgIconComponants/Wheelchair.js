import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWheelchair = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    style={{
      enableBackground: "new 0 0 490 490",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m356.043 182.252 24.85-142.233c.381-2.185 3.236-4.584 5.454-4.584h71.94v-30h-71.94c-16.747 0-32.124 12.923-35.006 29.421l-15.087 86.355H48.223v226.676h36.89v38.796c-15.815 4.761-28.354 17.151-33.311 32.881H0v30h51.802c6.386 20.264 25.352 35 47.698 35 27.57 0 50-22.43 50-50 0-22.119-14.442-40.917-34.387-47.49v-39.187h72.276c7.557 76.62 72.362 136.677 150.935 136.677 83.635 0 151.676-68.042 151.676-151.677 0-77.64-58.641-141.83-133.957-150.635zM99.5 454.564c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm231.512-303.352-5.334 30.532c-45.295 3.757-85 27.5-110.256 62.368l-137.199-.002v-92.898h252.789zM78.223 274.11l120.279.001a150.478 150.478 0 0 0-11.113 43.776H78.223V274.11zm260.101 180.454c-67.092 0-121.676-54.584-121.676-121.677s54.583-121.676 121.676-121.676S460 265.795 460 332.888s-54.584 121.676-121.676 121.676z" />
  </Svg>
);

export default SvgWheelchair;
