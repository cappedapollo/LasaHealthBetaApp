import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgExclamation = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={256} cy={478.609} r={33.391} />
    <Path d="M222.609 0h66.783v411.826h-66.783z" />
  </Svg>
);

export default SvgExclamation;