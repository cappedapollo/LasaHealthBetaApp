import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPause = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M437.019 74.981C388.668 26.628 324.38 0 256 0S123.332 26.628 74.981 74.981C26.629 123.333 0 187.62 0 256c0 68.38 26.628 132.668 74.981 181.019C123.333 485.371 187.62 512 256 512c68.38 0 132.668-26.628 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 480.653C132.126 480.653 31.347 379.874 31.347 256S132.126 31.347 256 31.347 480.653 132.126 480.653 256 379.874 480.653 256 480.653z" />
    <Path d="M146.286 135.837v240.327h94.041V135.837h-94.041zm62.694 208.979h-31.347V167.184h31.347v177.632zM271.673 135.837v240.327h94.041V135.837h-94.041zm62.694 208.979H303.02V167.184h31.347v177.632z" />
  </Svg>
);

export default SvgPause;