import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg001Abstract = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M256 384.531c-65.911 0-120.224-49.614-127.655-113.531h-48.97C87.016 361.75 163.308 433.266 256 433.266S424.984 361.75 432.625 271h-48.97C376.224 334.917 321.911 384.531 256 384.531z" />
    <Path d="M256 512c136.348 0 247.783-106.599 255.551-241h-48.833C455.007 378.311 365.242 463.266 256 463.266S56.993 378.311 49.281 271H.449C8.217 405.401 119.652 512 256 512zM256 127.469c65.911 0 120.224 49.614 127.655 113.531h127.896C503.783 106.599 392.348 0 256 0S8.217 106.599.449 241h127.896c7.431-63.917 61.744-113.531 127.655-113.531z" />
    <Circle cx={256} cy={256} r={64.797} />
  </Svg>
);

export default Svg001Abstract;
