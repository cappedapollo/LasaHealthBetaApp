import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg001Column = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M421 30h30V0H61v30h30c16.542 0 30 13.458 30 30v1.899C95.151 68.576 76 92.094 76 120s19.151 51.424 45 58.101V210H91v30h30v272h270V240h30v-30h-30v-31.899c25.849-6.677 45-30.195 45-58.101s-19.151-51.424-45-58.101V60c0-16.542 13.458-30 30-30zm-51.928 0A59.608 59.608 0 0 0 361 60v1.899c-21.053 5.439-37.663 22.048-43.101 43.101H194.101C188.663 83.947 172.053 67.337 151 61.899V60a59.608 59.608 0 0 0-8.072-30zM106 120c0-16.542 13.458-30 30-30s30 13.458 30 30-13.458 30-30 30-30-13.458-30-30zm255 362h-30V270h-30v212h-30V270h-30v212h-30V270h-30v212h-30V240h210zM151 210v-31.899c21.053-5.439 37.663-22.048 43.101-43.101h123.797c5.439 21.053 22.048 37.663 43.101 43.101V210zm255-90c0 16.542-13.458 30-30 30s-30-13.458-30-30 13.458-30 30-30 30 13.458 30 30z" />
  </Svg>
);

export default Svg001Column;