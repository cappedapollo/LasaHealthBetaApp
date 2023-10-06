import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg020Loupe = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={317} cy={195} r={15} />
    <Path d="M362 195c0 24.814-20.186 45-45 45 43.052 0 81.064-29.106 98.584-44.971C398.006 179.15 359.861 150 317 150c24.814 0 45 20.186 45 45zM272 195c0-24.814 20.186-45 45-45-43.052 0-81.064 29.106-98.584 44.971C235.994 210.85 274.139 240 317 240c-24.814 0-45-20.186-45-45z" />
    <Path d="M317 0C209.48 0 122 87.48 122 195c0 48.371 17.809 92.591 47.08 126.709l-24.58 24.58-21.211-21.211L0 448.353 63.647 512l123.274-123.289-21.21-21.211 24.58-24.58C224.409 372.191 268.629 390 317 390c107.52 0 195-87.48 195-195S424.52 0 317 0zm131.177 205.005C445.804 207.656 389.144 270 317 270s-128.804-62.344-131.177-64.995L176.858 195l8.965-10.005C188.196 182.344 244.856 120 317 120s128.804 62.344 131.177 64.995L457.142 195z" />
  </Svg>
);

export default Svg020Loupe;
