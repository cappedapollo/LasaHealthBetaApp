import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPinterest = (props) => (
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
      d="M0 0v455h455V0H0zm251.83 297.635c-19.57 0-37.973-10.516-44.227-22.557 0 0-10.516 41.691-12.71 49.78-7.84 28.437-30.926 56.874-32.684 59.176-1.229 1.649-4.013 1.105-4.324-1.026-.482-3.656-6.379-39.497.545-68.728l23.272-98.627s-5.771-11.543-5.771-28.624c0-26.85 15.556-46.856 34.939-46.856 16.474 0 24.377 12.337 24.377 27.177 0 16.521-10.516 41.318-15.977 64.216-4.511 19.212 9.598 34.831 28.546 34.831 34.332 0 57.371-43.993 57.371-96.138 0-39.684-26.678-69.397-75.292-69.397-54.867 0-89.075 40.96-89.075 86.649 0 15.805 4.667 26.928 11.963 35.499 3.345 4.014 3.765 5.585 2.613 10.143-.917 3.344-2.862 11.309-3.765 14.529-1.151 4.559-4.931 6.191-9.053 4.496-25.217-10.329-37.009-37.989-37.009-69.164C105.569 131.619 148.832 70 234.874 70c69.101 0 114.557 50.013 114.557 103.667 0 70.968-39.436 123.968-97.601 123.968z"
    />
  </Svg>
);

export default SvgPinterest;
