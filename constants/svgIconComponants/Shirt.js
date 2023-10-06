import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgShirt = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M416.264 44.124 372.14 0H139.861L95.736 44.124l-64.157-.634V512h448.843V43.49l-64.158.634zm-30.181 17.041-85.614 85.612-20.857-20.857 85.613-85.613 20.858 20.858zM146.776 40.307l85.612 85.612-20.857 20.857-85.612-85.611 20.857-20.858zm92.529 438.302H64.97V77.213l30.071.297L211.531 194l27.774-27.774v312.383zM187.083 33.391h137.835l-68.917 68.916-68.918-68.916zm259.948 445.218H272.696V166.226l27.773 27.773L416.959 77.51l30.072-.297v401.396z" />
    <Path d="M293.338 356.76H426.39V205.472H293.338V356.76zm33.391-117.896h66.269v15.051h-66.269v-15.051zm0 48.44h66.269v36.065h-66.269v-36.065z" />
    <Circle cx={195.785} cy={253.151} r={16.696} />
    <Circle cx={195.785} cy={322.794} r={16.696} />
    <Circle cx={195.785} cy={392.437} r={16.696} />
  </Svg>
);

export default SvgShirt;