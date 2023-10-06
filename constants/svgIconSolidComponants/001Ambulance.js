import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg001Ambulance = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M206 426.242h100V198.767H206zm17.5-176.237h19.429v-19.429h30v19.429h19.428v30h-19.428v19.429h-30v-19.429H223.5z" />
    <Path d="M176 298.742V168.767h160v129.976h162.5v-35H371V168.78h89.282l-32.513-65.013H387.49V84.748c0-18.773-15.218-33.991-33.991-33.991-18.772 0-33.991 15.218-33.991 33.991v19.018H49.289L13.5 246.896v51.847H176zM89.75 363.742c34.733 0 63.047 27.925 63.718 62.5H176v-97.5H13.5v67.5H0v30h26.032c.671-34.575 28.985-62.5 63.718-62.5zM498.5 328.742H336v97.5h22.532c.671-34.575 28.986-62.5 63.718-62.5s63.047 27.925 63.718 62.5H512v-30h-13.5z" />
    <Path d="M401 233.742h91.77l-17.485-34.963H401z" />
    <Circle cx={89.75} cy={427.492} r={33.75} />
    <Circle cx={422.25} cy={427.492} r={33.75} />
  </Svg>
);

export default Svg001Ambulance;
