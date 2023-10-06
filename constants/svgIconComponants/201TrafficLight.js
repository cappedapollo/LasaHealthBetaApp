import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201TrafficLight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M124.541 0v512H387.46V0H124.541zm221.405 470.487H166.054V41.513h179.892v428.974z" />
    <Path d="M256 89.946c-22.891 0-41.513 18.623-41.513 41.514S233.11 172.973 256 172.973s41.514-18.623 41.514-41.513S278.891 89.946 256 89.946zM256 214.487c-22.891 0-41.513 18.623-41.513 41.513S233.11 297.514 256 297.514s41.514-18.623 41.514-41.514-18.623-41.513-41.514-41.513zM256 339.027c-22.891 0-41.513 18.623-41.513 41.513 0 22.891 18.623 41.514 41.513 41.514s41.514-18.623 41.514-41.514c0-22.89-18.623-41.513-41.514-41.513z" />
  </Svg>
);

export default Svg201TrafficLight;