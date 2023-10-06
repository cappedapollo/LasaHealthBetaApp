import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVest = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M434.136 188.937c-43.293-60.682-23.339-138.768-23.141-139.515l3.938-14.642L322.237 0H189.761L97.066 34.78l3.938 14.642c.209.777 20.413 78.467-23.141 139.515l-3.104 4.351V442.4l112.63 69.598 66.475-41.092 71.052 40.904 112.325-69.41V193.288l-3.105-4.351zM293.15 33.391l-37.199 81.58-37.199-81.58h74.398zm-72.168 418.587-33.597 20.767-79.235-48.961V203.83c37.2-55.803 32.726-119.619 28.144-148.104l47.772-17.924 51.861 113.737-29.225 28.909v263.31l14.28 8.22zm182.867-28.194-79.54 49.15-84.216-48.483V194.384l29.778-29.455 57.98-127.158 47.854 17.956c-4.582 28.485-9.057 92.301 28.143 148.104v219.953z" />
    <Path d="M271.448 208.648c-9.216 0-16.691 7.48-16.691 16.706 0 9.227 7.474 16.707 16.691 16.707 9.226 0 16.7-7.48 16.7-16.707 0-9.226-7.474-16.706-16.7-16.706zM271.448 275.775c-9.216 0-16.691 7.478-16.691 16.701s7.474 16.711 16.691 16.711c9.226 0 16.7-7.489 16.7-16.711 0-9.223-7.474-16.701-16.7-16.701zM271.448 342.896c-9.216 0-16.691 7.49-16.691 16.711 0 9.222 7.474 16.711 16.691 16.711 9.226 0 16.7-7.49 16.7-16.711 0-9.221-7.474-16.711-16.7-16.711zM325.14 208.661h48.43v33.391h-48.43z" />
  </Svg>
);

export default SvgVest;