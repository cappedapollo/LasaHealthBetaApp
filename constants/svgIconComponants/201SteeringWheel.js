import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201SteeringWheel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.842 0 0 114.842 0 256s114.842 256 256 256 256-114.842 256-256S397.158 0 256 0zm0 49.548c105.454 0 192.682 79.479 204.96 181.677H326.061c-10.227-28.836-37.764-49.548-70.061-49.548s-59.835 20.713-70.061 49.548H51.04C63.318 129.027 150.546 49.548 256 49.548zM231.226 460.96C137.152 449.658 62.342 374.848 51.04 280.774h134.899c7.477 21.081 24.206 37.81 45.287 45.287V460.96zM256 280.774c-13.66 0-24.774-11.114-24.774-24.774S242.34 231.226 256 231.226 280.774 242.34 280.774 256 269.66 280.774 256 280.774zm24.774 180.186V326.061c21.081-7.477 37.81-24.206 45.287-45.287H460.96c-11.302 94.074-86.112 168.884-180.186 180.186z" />
  </Svg>
);

export default Svg201SteeringWheel;