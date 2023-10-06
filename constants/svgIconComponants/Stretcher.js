import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStretcher = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M485 212.278v-100H383.5v-70h-282v70H0v100h51.5v142.303c-17.656 6.208-30.351 23.039-30.351 42.79 0 25.007 20.344 45.351 45.351 45.351s45.351-20.344 45.351-45.351c0-19.751-12.695-36.583-30.351-42.79v-34.295h322v34.295c-17.656 6.208-30.351 23.039-30.351 42.79 0 25.007 20.344 45.351 45.351 45.351s45.351-20.344 45.351-45.351c0-19.751-12.695-36.583-30.351-42.79V212.278H485zm-30-70v40h-71.5v-40H455zm-323.5 40v-40h222v40h-222zm0-110h222v40h-222v-40zm-101.5 70h71.5v40H30v-40zm36.5 270.444c-8.465 0-15.351-6.886-15.351-15.351S58.035 382.02 66.5 382.02s15.351 6.886 15.351 15.351-6.886 15.351-15.351 15.351zm352 0c-8.465 0-15.351-6.886-15.351-15.351s6.886-15.351 15.351-15.351 15.351 6.886 15.351 15.351-6.886 15.351-15.351 15.351zm-15-122.436h-322v-78.008h322v78.008z" />
  </Svg>
);

export default SvgStretcher;