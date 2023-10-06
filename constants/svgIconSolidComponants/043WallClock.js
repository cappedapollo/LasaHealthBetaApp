import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg043Wallclock = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M271 263.267v123.969c18.89 6.298 32.553 24.135 32.553 45.115 0 26.221-21.332 47.553-47.553 47.553s-47.553-21.332-47.553-47.553c0-20.98 13.662-38.817 32.553-45.115V263.267c-22.654-3.308-42.946-13.99-58.354-29.527V512h146.707V233.74c-15.407 15.537-35.699 26.219-58.353 29.527z" />
    <Circle cx={256} cy={432.351} r={17.553} />
    <Path d="M415.932 159.932C415.932 71.746 344.187 0 256 0S96.068 71.746 96.068 159.932V512h56.579V161.006c0-56.989 46.364-103.354 103.354-103.354s103.354 46.364 103.354 103.354V512h56.579V159.932z" />
    <Path d="M256 87.652c-40.447 0-73.354 32.906-73.354 73.354S215.552 234.36 256 234.36s73.354-32.906 73.354-73.354S296.447 87.652 256 87.652zm15 88.952-31.435 26.003-19.121-23.117L241 162.486v-42.548h30z" />
  </Svg>
);

export default Svg043Wallclock;