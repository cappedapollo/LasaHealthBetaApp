import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMustache = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m506.389 201.189-5.914-17.255-16.644 7.464c-32.066 14.38-57.103 1.986-86.092-12.367-21.386-10.589-43.523-21.498-69.168-21.164-24.774.361-48.635 11.528-72.571 34.045-23.936-22.519-47.797-33.685-72.571-34.045-25.668-.375-47.784 10.576-69.17 21.164-28.99 14.352-54.026 26.748-86.093 12.367l-16.644-7.464-5.912 17.255c-8.959 26.138-7.16 52.465 5.201 76.135 10.754 20.596 29.24 38.686 53.456 52.319 57.198 32.201 140.746 35.991 191.733-8.831 26.333 23.149 61.348 33.33 96.935 33.33 33.321 0 67.141-8.927 94.799-24.498 24.215-13.633 42.701-31.725 53.456-52.319 12.36-23.672 14.159-49.999 5.199-76.136zm-74.988 99.444c-22.62 12.734-50.883 20.142-78.445 20.139-32.535-.002-64.089-10.328-84.176-34.404l-12.782-15.322-12.782 15.322c-37.102 44.471-113.298 42.03-162.619 14.265-41.799-23.532-48.506-52.399-46.913-72.226 7.949 1.94 15.582 2.785 22.944 2.785 27.304-.001 50.829-11.647 72.402-22.327 39.368-19.492 67.811-33.574 114.644 18.011l12.325 13.575 12.324-13.575c46.832-51.585 75.276-37.503 114.645-18.011 27.389 13.561 57.916 28.677 95.345 19.541 1.594 19.827-5.112 48.695-46.912 72.227z" />
  </Svg>
);

export default SvgMustache;