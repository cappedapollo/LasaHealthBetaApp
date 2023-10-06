import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrows = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m404.183 381.428-25.515-24.903 66.605-2.397-1.2-33.364-98.418 3.541-65.756-64.179L410.64 132.521l56.041 54.697L512 9.973l-181.599 44.23 56.34 54.989L256 236.798 125.26 109.192l56.34-54.989L0 9.973l45.319 177.244 56.041-54.697 130.741 127.605-65.756 64.179-98.417-3.541-1.2 33.364 66.605 2.397-25.516 24.904L9.4 377.887l-1.2 33.364 90.066 3.241 3.306 87.535 33.363-1.26-3.611-95.629 26.303-25.673 2.472 65.439 33.363-1.261-3.611-95.629 66.15-64.563 66.15 64.563-3.611 95.629 33.363 1.261 2.472-65.439 26.303 25.673-3.611 95.629 33.363 1.26 3.306-87.535 90.066-3.241-1.2-33.364-98.419 3.541zm61.698-325.859-17.231 67.394-51.819-50.576 69.05-16.818zm-402.53 67.394L46.119 55.569l69.05 16.818-51.818 50.576z" />
  </Svg>
);

export default SvgArrows;
