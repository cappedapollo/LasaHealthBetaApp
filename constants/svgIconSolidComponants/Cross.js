import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCross = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 59.076 452.922 0 256 196.922 59.076 0 0 59.076 196.922 256 0 452.922 59.076 512 256 315.076 452.922 512 512 452.922 315.076 256z" />
  </Svg>
);

export default SvgCross;
