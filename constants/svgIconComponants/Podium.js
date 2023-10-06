import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPodium = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M333.333 311.667V270h-78.372v-42.298c44.555-6.786 79.457-43.32 83.753-88.634C383.749 114.457 412.385 66.731 412.385 15V0H67.538v15c0 51.731 28.636 99.457 73.671 124.068 4.296 45.315 39.197 81.848 83.752 88.634V270h-73.294v83.333H0V485h485V311.667H333.333zm5.832-208.638V30h42.195c-3.97 28.947-19.278 55.23-42.195 73.029zM98.563 30h42.195v73.029C117.84 85.23 102.533 58.947 98.563 30zm72.195 99.632V30h138.407v99.632c0 38.159-31.045 69.203-69.204 69.203s-69.203-31.044-69.203-69.203zM303.333 300v155H181.667V300h121.666zM30 383.333h121.667V455H30v-71.667zM455 455H333.333V341.667H455V455z" />
  </Svg>
);

export default SvgPodium;
