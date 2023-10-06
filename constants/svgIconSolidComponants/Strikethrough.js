import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStrikethrough = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 335 335"
    style={{
      enableBackground: "new 0 0 335 335",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M335 152.5H168.849c-51.776-8.496-83.471-15.845-83.471-53.723C85.377 59.084 129.616 45 167.5 45c40.518 0 70.98 14.602 79.5 38.106l28.204-10.223c-6.792-18.74-21.263-33.998-41.847-44.125C215.059 19.758 192.286 15 167.5 15 100.436 15 55.377 48.668 55.377 98.777c0 22.519 7.594 40.513 22.602 53.723H0v30h166.393c51.633 8.48 83.23 15.876 83.23 53.723 0 39.693-44.239 53.777-82.123 53.777-40.531 0-70.997-14.609-79.506-38.127l-28.21 10.209c6.785 18.75 21.254 34.018 41.843 44.15C119.927 315.239 142.706 320 167.5 320c67.064 0 112.123-33.668 112.123-83.777 0-22.515-7.585-40.509-22.575-53.723H335v-30z" />
  </Svg>
);

export default SvgStrikethrough;
