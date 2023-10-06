import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgYoutube = (props) => (
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
      d="M0 0v455h455V0H0zm379.493 301.961c-3.861 16.75-17.563 29.118-34.057 30.96-39.044 4.353-78.575 4.382-117.952 4.353-39.361.029-78.892 0-117.948-4.353-16.498-1.841-30.199-14.21-34.04-30.96C70 278.114 70 252.061 70 227.499c0-24.562.065-50.603 5.556-74.45 3.841-16.766 17.547-29.118 34.024-30.959 39.06-4.365 78.608-4.382 117.969-4.365 39.357-.016 78.892 0 117.948 4.365 16.498 1.841 30.199 14.193 34.057 30.959 5.495 23.847 5.446 49.888 5.446 74.45 0 24.562-.016 50.615-5.507 74.462z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M186.855 276.399c33.467-17.355 66.638-34.565 100.138-51.932-33.597-17.53-66.764-34.821-100.138-52.237v104.169z"
    />
  </Svg>
);

export default SvgYoutube;
