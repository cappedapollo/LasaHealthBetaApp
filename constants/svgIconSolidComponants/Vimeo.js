import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVimeo = (props) => (
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
      d="M0 0v455h455V0H0zm384.849 159.356c-1.322 28.712-22.723 67.738-64.186 117.248-42.728 51.813-78.958 77.786-108.765 77.919-18.53 0-33.944-15.849-46.279-47.583l-12.977-43.54-12.769-43.465c-9.444-31.508-19.551-47.224-30.317-47.224-2.361 0-10.559 4.59-24.575 13.732L70 168.726l23.234-19.249 22.819-19.041c20.438-16.377 36.003-25.311 46.619-26.558a42.24 42.24 0 0 1 4.364-.227c21.836 0 35.569 15.717 40.876 47.224 3.023 17.926 5.535 32.546 7.519 43.767 1.927 11.201 3.551 19.021 4.873 23.536 7.235 29.731 15.054 44.711 23.385 44.863 6.498 0 16.378-9.747 29.751-29.146 13.128-19.929 20.136-34.681 21.1-44.277.208-2.002.359-3.759.359-5.46 0-13.071-7.159-19.55-21.458-19.55-7.235 0-14.922 1.549-23.178 4.572 14.753-45.675 43.239-68.55 85.362-68.701h3.552c30.468.812 45.674 18.077 45.825 51.946-.002 2.208-.077 4.57-.153 6.931z"
    />
  </Svg>
);

export default SvgVimeo;