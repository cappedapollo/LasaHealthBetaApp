import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMedicine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m397.091 143.794-37.567-42.709a11.674 11.674 0 0 1-2.911-7.716V79.918h21.984V0H133.405v79.918h21.984V93.37c0 2.842-1.034 5.582-2.911 7.716l-37.566 42.709a53.568 53.568 0 0 0-13.355 35.401V512h308.887V179.196a53.577 53.577 0 0 0-13.353-35.402zM324.902 30.417h23.276v19.084h-23.276V30.417zm-53.693 0h23.276v19.084h-23.276V30.417zm-53.693 0h23.276v19.084h-23.276V30.417zm-53.694 0h23.276v19.084h-23.276V30.417zm216.204 451.166H131.973v-40.882h248.053v40.882zm0-71.299H131.973V222.19h248.053v188.094zm0-218.511H131.973v-12.577a23.17 23.17 0 0 1 5.776-15.312l37.567-42.709a42.077 42.077 0 0 0 10.489-27.805V79.918h140.389V93.37a42.077 42.077 0 0 0 10.489 27.805l37.566 42.709a23.172 23.172 0 0 1 5.776 15.312v12.577z" />
    <Path d="M299.442 272.795v-32.004h-86.884v32.004h-32.004v86.883h32.004v32.004h86.883v-32.004h32.005v-86.883h-32.004zm1.587 56.466h-32.004v32.004h-26.048v-32.004h-32.004v-26.048h32.004v-32.004h26.048v32.004h32.004v26.048z" />
  </Svg>
);

export default SvgMedicine;
