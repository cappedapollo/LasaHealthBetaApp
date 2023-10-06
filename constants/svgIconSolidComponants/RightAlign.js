import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRightAlign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M153 132.5h302v30H153zM0 52.5h455v30H0zM0 372.5h455v30H0zM153 292.5h302v30H153zM0 212.5h455v30H0z" />
  </Svg>
);

export default SvgRightAlign;