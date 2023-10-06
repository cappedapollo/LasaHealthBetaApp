import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg010Thermometer = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M309.333 280.075V133.333C309.333 103.878 285.455 80 256 80s-53.333 23.878-53.333 53.333V182H241v-54h30v175.475c17.796 6.218 30.601 23.164 30.601 43.053 0 25.144-20.456 45.6-45.601 45.6s-45.601-20.456-45.601-45.6c0-19.89 12.805-36.835 30.601-43.053v-91.474h-38.333v68.075c-19.416 15.57-31.891 39.439-31.999 66.238C170.48 392.519 208.5 432 256 432c47.132 0 85.334-38.202 85.334-85.333-.001-26.943-12.499-50.953-32.001-66.592z" />
    <Circle cx={256} cy={346.528} r={15.6} />
    <Path d="M413.816 76.726 398.973 0H113.027L98.184 76.726c-23.016 118.958-23.016 239.591 0 358.549L113.027 512h285.945l14.844-76.726c23.016-118.957 23.016-239.591 0-358.548zm-42.483 269.941c0 30.808-11.996 59.771-33.779 81.554C315.772 450.004 286.808 462 256 462c-31.75 0-61.357-13.171-82.599-35.026-21.231-21.844-32.856-50.534-32.733-80.782.121-29.861 11.626-58.012 31.999-79.247V133.333C172.667 87.383 210.05 50 256 50s83.333 37.383 83.333 83.333v133.609c20.493 21.353 32 49.678 32 79.725z" />
  </Svg>
);

export default Svg010Thermometer;
