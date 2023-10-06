import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDropCounter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.998 511.998"
    style={{
      enableBackground: "new 0 0 511.998 511.998",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M411.639 199.194c-34.582 0-62.717 28.135-62.717 62.716v137.495c0 45.312-36.864 82.176-82.176 82.176-40.115 0-73.586-28.899-80.742-66.967h48.99v-51.388h26.395v-30.417h-28.885v-8.722a3.89 3.89 0 0 1 3.886-3.886h13.178c28.403 0 51.509-23.107 51.509-51.509V0H37.643v268.691c0 28.403 23.107 51.509 51.509 51.509h13.178a3.89 3.89 0 0 1 3.886 3.886v8.722H77.333v30.417h26.395v51.388h51.455c7.448 54.917 54.636 97.385 111.563 97.385 62.084 0 112.593-50.509 112.593-112.593V261.911c0-17.81 14.49-32.299 32.3-32.299 17.81 0 32.299 14.49 32.299 32.299v137.495h30.417V261.911c0-34.582-28.134-62.717-62.716-62.717zM68.06 30.417h202.601v89.127H68.06V30.417zm34.271 259.367H89.153c-11.63 0-21.092-9.463-21.092-21.092v-118.73h202.601v118.73c0 11.63-9.462 21.092-21.092 21.092h-13.178c-18.915 0-34.303 15.389-34.303 34.303v8.722h-65.452v-8.722c-.003-18.915-15.392-34.303-34.306-34.303zm31.814 94.413v-20.971h70.43v20.971h-70.43z" />
    <Path d="M91.2 68.849h98.683v30.417H91.2zM91.2 170.245h98.683v30.417H91.2zM91.2 220.94h98.683v30.417H91.2z" />
  </Svg>
);

export default SvgDropCounter;
