import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgYahoo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm323.733 179.725c-7.709 2.083-78.238 56.77-82.884 70.188-1.028 4.629.101 49.577 1.129 56.311 4.646 1.041 38.194.136 44.345 1.159l-.735 13.895c-6.033-.459-48.654-.341-72.971-.341-12.373 0-52.106 1.352-64.313 1.006l2.31-13.226c6.698-.494 34.418 1.229 40.486-5.246 3.023-3.216 2.065-45.938 1.041-53.152-2.564-7.722-64.36-85.172-80.509-97.855H70V133h140.376v1.352c.118 0 .359.013.477.031l-.477 3.299v14.783h-42.333c18.869 27.602 45.92 60.909 57.457 76.904l56.551-51.236h-33.617l-4.734-19.447h123.117l-.906 1.383c.101 0 .289.018.424.018l-8.781 12.766c-.088 0-.223.018-.293.035l-3.535 5.246h-22.715c-2.938.651-5.533 1.232-7.278 1.591zm37.152 142.271-10.303-.752-9.573-.836-.101-20.781 12.132 1.488 10.854.529-3.009 20.352zm2.153-34.519-18.883-1.522-.512-87.824c4.34.853 37.682 4.016 41.357 4.134l-21.962 85.212z"
    />
  </Svg>
);

export default SvgYahoo;