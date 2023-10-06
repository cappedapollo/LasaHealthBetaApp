import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDislike = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M488.042 235.1a51.948 51.948 0 0 0 8.979-29.253c0-18.389-9.558-34.577-23.957-43.89a51.948 51.948 0 0 0 8.979-29.253c0-18.389-9.558-34.577-23.958-43.89a51.948 51.948 0 0 0 8.979-29.253c0-28.808-23.437-52.245-52.245-52.245H0v323.92h164.042c66.465 0 118.53 53.234 118.53 121.195 0 28.812 23.44 52.251 52.251 52.251 28.812 0 52.252-23.44 52.252-52.251 0-44.541-9.07-85.908-26.412-121.197h99.092c28.808 0 52.245-23.437 52.245-52.245 0-18.388-9.558-34.575-23.958-43.889zM85.674 299.89H31.347V38.664h54.327V299.89zm62.694 0h-31.347V38.664h31.347V299.89zm311.387-.002H318.694v21.373l2.541 3.9c22.566 34.643 34.493 78.652 34.493 127.271 0 11.526-9.378 20.904-20.905 20.904-11.526 0-20.904-9.378-20.904-20.904 0-40.834-15.341-79.086-43.196-107.711-24.481-25.158-56.35-40.473-91.007-44.027V38.664h235.102c11.523 0 20.898 9.375 20.898 20.898S426.34 80.46 414.817 80.46h-10.449v31.347h25.429c11.523 0 20.898 9.375 20.898 20.898s-9.375 20.898-20.898 20.898h-25.429v31.347h40.407c11.523 0 20.898 9.375 20.898 20.898s-9.375 20.898-20.898 20.898h-40.407v31.347h55.387c11.523 0 20.898 9.375 20.898 20.898s-9.375 20.897-20.898 20.897z" />
  </Svg>
);

export default SvgDislike;
