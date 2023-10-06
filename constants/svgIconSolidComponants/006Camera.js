import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg006Camera = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M306.624 117.333h94.453V22.881zM264.198 117.333 381.531 0H178.143v117.333zM208.143 147.333v47.634c0 24.28-19.753 44.033-44.033 44.033-24.279 0-44.032-19.753-44.032-44.033v-47.634H87.4a183.01 183.01 0 0 0-31.322 102.441V512h167.504c-46.006-23.199-77.638-70.888-77.638-125.833 0-77.656 63.178-140.834 140.833-140.834S427.61 308.511 427.61 386.167c0 54.945-31.632 102.634-77.638 125.833h105.949V249.775a183.008 183.008 0 0 0-31.322-102.441H208.143zM316.411 177h64v30h-64z" />
    <Path d="M397.61 386.167c0-61.114-49.72-110.833-110.833-110.833s-110.833 49.72-110.833 110.833S225.664 497 286.777 497c61.114 0 110.833-49.72 110.833-110.833zM286.777 320c36.484 0 66.167 29.683 66.167 66.167s-29.683 66.167-66.167 66.167-66.167-29.682-66.167-66.167S250.293 320 286.777 320z" />
    <Circle
      cx={286.777}
      cy={386.167}
      transform="rotate(-7 287.259 386.72)"
      r={36.167}
    />
    <Path d="M150.078 194.967c0 7.738 6.295 14.033 14.032 14.033 7.738 0 14.033-6.295 14.033-14.033v-47.634h-28.065z" />
  </Svg>
);

export default Svg006Camera;
