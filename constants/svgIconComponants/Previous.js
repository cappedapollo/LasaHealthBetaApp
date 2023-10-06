import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPrevious = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M437.019 74.981C388.668 26.628 324.379 0 256 0S123.332 26.628 74.981 74.981C26.629 123.333 0 187.62 0 256c0 68.38 26.628 132.668 74.981 181.019C123.333 485.371 187.621 512 256 512s132.668-26.628 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 480.653C132.125 480.653 31.347 379.874 31.347 256S132.125 31.347 256 31.347 480.653 132.126 480.653 256 379.875 480.653 256 480.653z" />
    <Path d="M240.327 196.756v-60.92h-94.041v240.327h94.041v-60.919l125.388 72.393V124.364l-125.388 72.392zm94.04 136.586L208.98 260.95v83.867h-31.347V167.184h31.347v83.866l125.388-72.393v154.685z" />
  </Svg>
);

export default SvgPrevious;
