import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEmergency = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450 450"
    style={{
      enableBackground: "new 0 0 450 450",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M326.5 0C258.293 0 203 55.293 203 123.5c0 25.813 7.924 49.773 21.466 69.59l-16.222 48.665 48.665-16.222C276.727 239.076 300.687 247 326.5 247c68.207 0 123.5-55.293 123.5-123.5S394.707 0 326.5 0zM388 139h-47v46h-30v-46h-46v-30h46V62h30v47h47v30zM229.131 355.814 94.186 220.869l33.726-33.726-84.564-84.563S2.937 139.755.22 169.24c-3.636 39.466 38.14 111.221 103.729 176.812 65.589 65.588 137.344 107.365 176.81 103.729 29.485-2.719 66.661-43.129 66.661-43.129l-84.563-84.563-33.726 33.725z" />
  </Svg>
);

export default SvgEmergency;
