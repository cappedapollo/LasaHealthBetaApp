import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M455 257v-70h-63.174a166.556 166.556 0 0 0-24.066-57.334l42.32-42.32-49.498-49.498-42.756 42.756A166.482 166.482 0 0 0 258 57.183V0h-70v59.319c-21.306 5.221-41.009 14.515-58.24 27.014L88.346 44.92 38.849 94.417l43.979 43.979A166.385 166.385 0 0 0 62.359 197H0v70h66.623c5.396 19.392 14.195 37.364 25.711 53.24L45.92 366.654l49.497 49.498 48.979-48.979A166.41 166.41 0 0 0 198 386.818V455h70v-70.319a166.613 166.613 0 0 0 52.334-22.92l47.32 47.32 49.498-49.498-47.756-47.756A166.502 166.502 0 0 0 391.827 257H455zm-227 52.5c-48.248 0-87.5-39.252-87.5-87.5s39.252-87.5 87.5-87.5 87.5 39.252 87.5 87.5-39.252 87.5-87.5 87.5z" />
  </Svg>
);

export default SvgSettings;
