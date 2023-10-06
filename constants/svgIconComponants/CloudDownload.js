import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCloudDownload = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M399.032 319.072c48.534 0 88.02-39.486 88.02-88.02 0-43.143-31.201-79.135-72.224-86.601C407.207 63.528 338.884 0 256 0S104.793 63.528 97.171 144.452c-41.022 7.464-72.224 43.458-72.224 86.601 0 48.534 39.486 88.02 88.02 88.02h38.509v33.007H81.542L256 512l174.458-159.92h-69.934v-33.007h38.508zM256 467.222l-89.602-82.135h18.086V231.052h143.032v154.035h18.086L256 467.222zM151.476 198.045v88.02h-38.509c-30.334 0-55.013-24.679-55.013-55.012 0-30.334 24.679-55.013 55.013-55.013h16.504v-16.504c0-69.768 56.761-126.529 126.529-126.529s126.529 56.761 126.529 126.529v16.504h16.504c30.334 0 55.012 24.679 55.012 55.013s-24.679 55.012-55.012 55.012h-38.509v-88.02H151.476z" />
  </Svg>
);

export default SvgCloudDownload;