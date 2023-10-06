import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg014Pedal = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M512 401.906c0-20.149-13.228-37.259-31.453-43.122V67.135C480.547 30.117 450.43 0 413.412 0s-67.135 30.117-67.135 67.135v91.382c0 20.503-16.681 37.184-37.227 37.184-20.503 0-37.184-16.681-37.184-37.184V67.135C271.867 30.117 241.751 0 204.732 0h-1.605c-37.018 0-67.135 30.117-67.135 67.135v122.517c3.592-.22 7.209-.345 10.855-.345 6.453 0 12.822.36 19.097 1.041V67.135c0-20.503 16.681-37.184 37.184-37.184h1.605c20.503 0 37.183 16.681 37.183 37.184v91.382c0 37.018 30.117 67.135 67.179 67.135 37.018 0 67.135-30.117 67.135-67.135V67.135c0-20.503 16.681-37.184 37.184-37.184s37.183 16.681 37.183 37.184v292.451c-17.04 6.51-29.179 23.02-29.179 42.32v55.884h31.129V512h29.952v-54.21H512z" />
    <Circle
      cx={146.847}
      cy={365.154}
      transform="rotate(-11.19 146.906 365.274)"
      r={53.554}
    />
    <Path d="M0 365.154C0 446.125 65.875 512 146.847 512s146.847-65.875 146.847-146.846c0-80.972-65.875-146.847-146.847-146.847S0 284.182 0 365.154zm230.353 0c0 46.045-37.46 83.506-83.506 83.506-46.045 0-83.506-37.46-83.506-83.506s37.46-83.506 83.506-83.506c46.045 0 83.506 37.46 83.506 83.506z" />
  </Svg>
);

export default Svg014Pedal;
