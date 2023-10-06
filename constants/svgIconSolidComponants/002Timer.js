import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg002Timer = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M165 461.193V510h180v-48.807c-57.207 25.067-122.7 25.108-180 0zM345 48.807V0H165v48.807c57.207-25.067 122.7-25.108 180 0zM404.252 240h45.177c-3.249-42.509-20.195-81.244-46.412-111.804l-31.925 31.925a151.407 151.407 0 0 0-21.213-21.213l31.925-31.925C351.244 80.766 312.509 63.82 270 60.571v45.177a150.825 150.825 0 0 0-30 0V60.571c-42.51 3.249-81.244 20.195-111.804 46.412l31.925 31.925a151.407 151.407 0 0 0-21.213 21.213l-31.925-31.925C80.766 158.756 63.82 197.491 60.571 240h45.177a150.75 150.75 0 0 0 0 30H60.571c3.249 42.509 20.195 81.244 46.412 111.803l31.925-31.925a151.353 151.353 0 0 0 21.213 21.213l-31.925 31.925c30.56 26.218 69.294 43.164 111.804 46.413v-45.177c9.993.997 19.998.997 30 0v45.177c42.509-3.249 81.244-20.195 111.804-46.413l-31.925-31.925a151.353 151.353 0 0 0 21.213-21.213l31.925 31.925c26.217-30.559 43.163-69.294 46.412-111.803h-45.177c.997-9.993.997-19.999 0-30zM360 270h-62.58c-6.192 17.459-22.865 30-42.42 30s-36.228-12.541-42.42-30H180v-30h32.58c6.192-17.458 22.865-30 42.42-30s36.227 12.542 42.42 30H360z" />
    <Circle cx={255} cy={255} r={15} />
  </Svg>
);

export default Svg002Timer;