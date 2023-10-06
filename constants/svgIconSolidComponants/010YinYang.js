import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg010Yinyang = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M361.5 165.5c0 58.173-47.327 105.5-105.5 105.5-41.631 0-75.5 33.869-75.5 75.5S214.369 422 256 422c91.533 0 166-74.467 166-166 0-56.13-28.008-105.836-70.777-135.894 6.585 13.757 10.277 29.152 10.277 45.394zM256 392c-25.089 0-45.5-20.411-45.5-45.5S230.911 301 256 301s45.5 20.411 45.5 45.5S281.089 392 256 392z" />
    <Circle cx={256} cy={165.5} r={15.5} />
    <Circle cx={256} cy={346.5} r={15.5} />
    <Path d="M150.5 346.5c0-58.173 47.327-105.5 105.5-105.5 41.631 0 75.5-33.869 75.5-75.5S297.631 90 256 90c-91.533 0-166 74.467-166 166 0 56.13 28.008 105.836 70.777 135.894-6.584-13.757-10.277-29.152-10.277-45.394zM256 120c25.089 0 45.5 20.411 45.5 45.5S281.089 211 256 211s-45.5-20.411-45.5-45.5S230.911 120 256 120z" />
    <Path d="M0 0v512h512V0zm60 256c0-108.075 87.925-196 196-196s196 87.925 196 196-87.925 196-196 196S60 364.075 60 256z" />
  </Svg>
);

export default Svg010Yinyang;
