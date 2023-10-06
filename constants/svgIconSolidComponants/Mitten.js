import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMitten = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M449.955 41.206c-45.568-13.182-93.192 13.071-106.372 58.64l-8.74 30.211c-9.13-11.562-25.535-15.172-38.859-7.828-14.835 8.179-20.233 26.838-12.054 41.673l26.97 48.925-7.691 26.584 165.012 47.732 40.371-139.564c13.184-45.568-13.069-93.192-58.637-106.373zM275.394 335.587l17.59-60.805 165.008 47.737-17.59 60.805zM216.014 213.128c-13.324-7.344-29.729-3.734-38.859 7.828l-8.74-30.211c-13.18-45.569-60.806-71.821-106.372-58.64-45.566 13.181-71.82 60.806-58.639 106.372L43.777 378.04l165.011-47.732-7.69-26.583 26.969-48.925c8.18-14.834 2.782-33.493-12.053-41.672zM53.99 413.388 219 365.65l17.591 60.807-165.008 47.737z" />
  </Svg>
);

export default SvgMitten;
