import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgJeans = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m83.034 0 23.336 512h129.255V213.598h40.75V512H405.63L428.966 0H83.034zm37.342 85.909h41.494c-5.439 19.817-20.287 35.975-39.532 43.054l-1.962-43.054zm81.857 392.7h-63.96l-1.268-27.826h65.228v27.826zm171.494 0h-63.96v-27.826h65.228l-1.268 27.826zm2.789-61.218h-66.75V180.206H202.233v237.185h-66.75l-11.578-254.029c18.111-4.483 34.621-14.111 47.571-28.001 12.949-13.889 21.389-31.037 24.588-49.453h119.869a96.626 96.626 0 0 0 24.589 49.454c12.95 13.89 29.459 23.518 47.57 28l-11.576 254.029zm13.146-288.428c-19.245-7.078-34.093-23.236-39.532-43.054h41.494l-1.962 43.054zm3.485-76.445H118.853l-.872-19.127h276.037l-.871 19.127z" />
  </Svg>
);

export default SvgJeans;