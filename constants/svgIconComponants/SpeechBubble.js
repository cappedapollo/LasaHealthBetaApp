import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSpeechBubble = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M413.973 71.027C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.027 71.027 0 177.726 0 242.5c0 46.517 13.117 91.428 38.005 130.373L.944 484.055l111.184-37.06C151.071 471.883 195.982 485 242.5 485c64.774 0 125.671-25.225 171.473-71.026C459.775 368.171 485 307.274 485 242.5c0-64.774-25.225-125.671-71.027-171.473zM242.5 455c-42.976 0-84.377-12.77-119.729-36.928l-6.146-4.2-68.247 22.749 22.749-68.245-4.199-6.146C42.77 326.877 30 285.475 30 242.5 30 125.327 125.327 30 242.5 30S455 125.327 455 242.5 359.673 455 242.5 455z" />
  </Svg>
);

export default SvgSpeechBubble;
