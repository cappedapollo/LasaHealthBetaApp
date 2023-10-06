import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLoading = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 367.136 367.136"
    style={{
      enableBackground: "new 0 0 367.136 367.136",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M367.136 149.7V36.335l-39.14 38.953a182.447 182.447 0 0 0-47.732-44.706c-29.33-18.898-63.352-28.888-98.391-28.888C81.588 1.694 0 83.282 0 183.568s81.588 181.874 181.874 181.874c34.777 0 68.584-9.851 97.768-28.488 28.394-18.133 51.175-43.703 65.881-73.944l-26.979-13.119c-25.66 52.77-78.029 85.551-136.669 85.551C98.13 335.442 30 267.312 30 183.568S98.13 31.694 181.874 31.694c49.847 0 96.439 24.9 124.571 65.042L253.226 149.7h113.91z" />
  </Svg>
);

export default SvgLoading;
