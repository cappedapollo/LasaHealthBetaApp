import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg004YinYang = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02c48.347 48.346 112.625 74.974 180.997 74.98H256c68.38 0 132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 98.004c20.711 0 37.5 16.789 37.5 37.5s-16.789 37.5-37.5 37.5-37.5-16.789-37.5-37.5 16.789-37.5 37.5-37.5zm159.806 317.802c-41.493 41.493-96.279 64.859-154.754 66.133l-.002-.074c-.765.017-1.528.042-2.291.068a79.489 79.489 0 0 1-5.524 0c-.701-.024-1.402-.048-2.105-.064-56.485-2.575-100.709-48.793-100.709-105.292 0-57.923 47-105.192 104.831-105.579.479.022 1.11.021 1.576-.004 74.348-.452 134.746-61.165 134.746-135.569 0-27.895-8.414-53.849-22.888-75.423 17.015 9.82 32.857 21.929 47.12 36.193C458.492 138.88 482 195.633 482 256s-23.508 117.12-66.194 159.806z" />
    <Circle cx={256} cy={376.49} r={37.5} />
  </Svg>
);

export default Svg004YinYang;