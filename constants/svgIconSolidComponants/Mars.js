import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMars = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 351.778 351.778"
    style={{
      enableBackground: "new 0 0 351.778 351.778",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m321.778 95.024 30-.049-.154-94.821L256.802 0l-.049 30 43.741.071-58.583 58.583c-26.385-21.595-59.13-33.339-93.68-33.339-39.594 0-76.817 15.419-104.814 43.417C15.419 126.729 0 163.953 0 203.547s15.419 76.818 43.416 104.815 65.221 43.416 104.814 43.416 76.818-15.419 104.815-43.416c54.215-54.215 57.572-140.324 10.073-198.49l58.588-58.588.072 43.74zm-89.945 192.125c-22.331 22.331-52.021 34.629-83.603 34.629s-61.27-12.298-83.601-34.629C42.298 264.818 30 235.128 30 203.547s12.298-61.271 34.629-83.602 52.021-34.629 83.602-34.629c31.581 0 61.271 12.298 83.603 34.629 46.097 46.099 46.097 121.106-.001 167.204z" />
  </Svg>
);

export default SvgMars;
