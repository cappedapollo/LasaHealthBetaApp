import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPng = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M346.747 0H47.628v512h416.744V117.625L346.747 0zm10.462 60.979 46.184 46.184h-46.184V60.979zm71.442 415.3H83.349v-35.721h345.302v35.721zm0-71.442H83.349v-154.79h345.302v154.79zm0-190.511H83.349V35.721h238.14v107.163h107.163v71.442z" />
    <Path d="M265.966 286.541v44.687l-35.471-44.687h-13.717v76.086h17.573v-43.508l35.044 43.508h14.147v-76.086zM177.128 286.541h-32.469v76.086h17.573v-24.539h15.431c13.352 0 24.326-11.181 24.326-25.826.001-12.742-10.824-25.721-24.861-25.721zm-.534 36.22h-14.36v-20.788h13.717c5.02 0 8.252 4.17 8.252 10.288-.001 5.937-2.935 10.5-7.609 10.5zM340.978 322.867v12.754h14.79v2.358c-5.502 6.359-11.68 9.539-18.54 9.539-12.017 0-20.253-10.045-20.253-22.826 0-13.414 8.683-23.041 19.504-23.041 7.337 0 13.886 3.376 18.003 10.823l13.074-9.859c-5.322-9.979-15.467-16.609-30.435-16.609-20.319 0-37.936 15.895-37.936 38.042 0 21.91 15.607 39.116 36.543 39.116 7.572 0 14.253-2.679 20.039-8.037h.001v7.5h14.574v-39.759h-29.364z" />
  </Svg>
);

export default SvgPng;
