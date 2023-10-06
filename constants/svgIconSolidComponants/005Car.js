import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg005Car = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M428 229.999c-8.45-11.27-21.91-18-36-18H0v270h76c0-33.08 26.92-60 60-60s60 26.92 60 60h106v-210h157.5z" />
    <Path d="M332 331.999h172.5l-22.5-30H332zM332 361.999v120h15c0-33.08 26.92-60 60-60s60 26.92 60 60h45v-120z" />
    <Circle cx={407} cy={481.999} r={30} />
    <Circle cx={136} cy={481.999} r={30} />
    <Path d="m151 173.212 24.719-24.719 10.607 10.607c29.313 29.315 76.755 29.309 106.065 0l10.606-10.607-63.64-63.64 25.425-25.424-21.212-21.213-25.425 25.424L154.505 0l-10.606 10.606c-29.315 29.314-29.309 76.758 0 106.066l10.606 10.607-24.719 24.719H99.79l-30 30H151z" />
  </Svg>
);

export default Svg005Car;