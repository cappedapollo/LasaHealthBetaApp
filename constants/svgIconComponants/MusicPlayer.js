import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMusicPlayer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M460.8 56.889H51.2c-28.232 0-51.2 22.968-51.2 51.2v295.822c0 28.233 22.968 51.2 51.2 51.2h409.6c28.233 0 51.2-22.967 51.2-51.2V108.089c0-28.232-22.967-51.2-51.2-51.2zm17.067 347.022c0 9.412-7.655 17.067-17.067 17.067H51.2c-9.411 0-17.067-7.655-17.067-17.067V108.089c0-9.411 7.656-17.067 17.067-17.067h409.6c9.412 0 17.067 7.656 17.067 17.067v295.822z" />
    <Path d="M162.913 136.533c-4.01-3.529-9.252-5.689-15.002-5.689-5.749 0-10.991 2.16-15.003 5.689H85.333v34.133h47.577c4.008 3.527 9.249 5.687 14.995 5.689h.006c5.59 0 10.859-2.023 15.014-5.689h263.741v-34.133H162.913zM240.071 271.171v60.68l45.511-30.34z" />
    <Path d="M256 216.178c-47.053 0-85.333 38.281-85.333 85.333s38.281 85.333 85.333 85.333 85.333-38.281 85.333-85.333-38.28-85.333-85.333-85.333zm0 136.533c-28.233 0-51.2-22.967-51.2-51.2 0-28.233 22.967-51.2 51.2-51.2 28.233 0 51.2 22.967 51.2 51.2 0 28.233-22.967 51.2-51.2 51.2zM381.156 284.444h56.889v34.133h-56.889zM73.956 284.444h56.889v34.133H73.956z" />
  </Svg>
);

export default SvgMusicPlayer;