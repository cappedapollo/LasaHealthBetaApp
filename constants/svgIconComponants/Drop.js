import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDrop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 101.334v-32h-69.333V.001h-32v69.333H101.335V.001h-32v69.333H0v32h69.335v309.332H0v32h69.335v69.333h32v-69.333h309.332v69.333h32v-69.333H512v-32h-69.333V101.334H512zM410.667 362.666c0 26.468-21.533 48-48 48H149.334c-26.454 0-47.976-21.51-47.999-47.958V149.292c.022-26.448 21.544-47.958 47.999-47.958h213.333c26.467 0 48 21.533 48 48v213.332z" />
    <Path d="m320.112 212.151-64.11-64.111-64.072 64.072c-17.15 17.128-26.595 39.909-26.596 64.148.001 49.993 40.674 90.666 90.666 90.666 49.993 0 90.666-40.673 90.666-90.666 0-24.214-9.43-46.982-26.554-64.109zM256 334.927c-32.348 0-58.665-26.318-58.666-58.665.001-15.682 6.112-30.424 17.216-41.514l41.453-41.453 41.482 41.482c11.081 11.084 17.182 25.815 17.182 41.485-.001 32.347-26.318 58.665-58.667 58.665z" />
  </Svg>
);

export default SvgDrop;