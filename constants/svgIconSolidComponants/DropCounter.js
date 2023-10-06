import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDropCounter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.998 511.998"
    style={{
      enableBackground: "new 0 0 511.998 511.998",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M37.643 0v119.545h263.435V0H37.643zm53.556 99.266V68.849h98.686v30.417H91.199zM37.643 149.962v118.73c0 28.403 23.107 51.509 51.509 51.509h17.065v19.706H77.333v30.417h28.915v21.985h126.226v-21.986h28.915v-30.417h-28.884v-19.705h17.065c28.403 0 51.509-23.107 51.509-51.509v-118.73H37.643zm152.243 101.39H91.199v-30.417h98.686v30.417zm0-50.695H91.199V170.24h98.686v30.417z" />
    <Path d="M411.639 199.194c-34.582 0-62.717 28.135-62.717 62.716v137.495c0 45.312-36.864 82.176-82.176 82.176-37.212 0-68.708-24.87-78.786-58.856h-31.373c10.77 50.932 56.068 89.273 110.159 89.273 62.084 0 112.593-50.509 112.593-112.593V261.911c0-17.81 14.49-32.299 32.3-32.299s32.299 14.49 32.299 32.299v137.495h30.417V261.911c0-34.582-28.134-62.717-62.716-62.717z" />
  </Svg>
);

export default SvgDropCounter;