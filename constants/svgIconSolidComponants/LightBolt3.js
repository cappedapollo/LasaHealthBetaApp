import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLightBolt3 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M391.529 9.035c-42.859 0-80.486 22.385-101.84 56.097a192.437 192.437 0 0 1 20.267 7.254c22.958 9.71 43.568 23.604 61.258 41.294 17.691 17.691 31.584 38.3 41.294 61.258a191.06 191.06 0 0 1 12.675 43.946 114.062 114.062 0 0 1 28.895 13.601C488.807 211.346 512 173.134 512 129.506 512 62.971 458.063 9.035 391.529 9.035z" />
    <Path d="M391.529 249.976c0-86.494-70.117-156.612-156.612-156.612S78.306 163.482 78.306 249.976C35.059 249.976 0 285.036 0 328.282s35.059 78.306 78.306 78.306h56.956l135.797-203.695V358.4h79.578l-32.125 48.188h73.017c43.247 0 78.306-35.059 78.306-78.306s-35.059-78.306-78.306-78.306z" />
    <Path d="M283.106 394.541h-48.188v-72.282l-72.283 108.423h48.189v72.283z" />
  </Svg>
);

export default SvgLightBolt3;