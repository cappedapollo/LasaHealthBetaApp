import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWind = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M169.732 385.419H14.382v34.522h155.35c15.863 0 28.768 12.906 28.768 28.768 0 15.863-12.906 28.768-28.768 28.768s-28.768-12.906-28.768-28.768h-34.522c0 34.898 28.392 63.291 63.291 63.291s63.291-28.392 63.291-63.291c-.002-34.898-28.394-63.29-63.292-63.29zM388.372 218.562c0-82.62-66.976-149.596-149.596-149.596S89.18 135.942 89.18 218.562c-41.309 0-74.798 33.489-74.798 74.798 0 3.914.304 7.756.883 11.507h223.511c15.863 0 28.768-12.906 28.768-28.768 0-15.863-12.906-28.768-28.768-28.768s-28.768 12.906-28.768 28.768h-34.522c0-34.898 28.392-63.291 63.291-63.291 34.898 0 63.291 28.392 63.291 63.291 0 34.898-28.392 63.291-63.291 63.291H30.245c13.69 17.504 34.99 28.768 58.935 28.768h299.192c41.309 0 74.798-33.489 74.798-74.798s-33.489-74.798-74.798-74.798z" />
    <Path d="M384.55 0c-34.743 1.194-65.356 18.606-84.538 44.894a183.552 183.552 0 0 1 10.441 4.033c21.928 9.275 41.615 22.546 58.514 39.444 16.897 16.897 30.169 36.584 39.444 58.514a182.52 182.52 0 0 1 12.107 41.977 108.936 108.936 0 0 1 26.779 12.465c29.3-18.792 49.047-51.179 50.322-88.264C439.857 103.339 394.277 57.76 384.55 0z" />
  </Svg>
);

export default SvgWind;
