import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMouse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M289.032 115.613h-15.394c2.687-18.175 9.879-28.526 17.942-40.117C303.288 58.665 316.559 39.588 316.559 0h-33.032c0 29.229-8.834 41.928-19.064 56.633-9.948 14.301-21.02 30.232-24.126 58.98h-17.369c-63.75 0-115.613 51.863-115.613 115.613v165.161c0 63.749 51.863 115.613 115.613 115.613h66.065c63.749 0 115.613-51.864 115.613-115.613V231.226c-.001-63.75-51.865-115.613-115.614-115.613zm82.581 280.774c0 45.535-37.046 82.581-82.581 82.581h-66.065c-45.535 0-82.581-37.046-82.581-82.581V231.226c0-45.535 37.046-82.581 82.581-82.581h66.065c45.535 0 82.581 37.046 82.581 82.581v165.161z" />
    <Path d="M239.484 198.194h33.032v99.097h-33.032z" />
  </Svg>
);

export default SvgMouse;