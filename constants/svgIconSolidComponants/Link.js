import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLink = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 484.457 484.457"
    style={{
      enableBackground: "new 0 0 484.457 484.457",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M447.112 37.345C423.031 13.263 391.012 0 356.957 0c-34.057 0-66.075 13.263-90.156 37.345L166.215 137.931l21.213 21.213L288.013 58.558C306.428 40.143 330.913 30 356.957 30c26.043 0 50.527 10.143 68.942 28.558s28.558 42.899 28.558 68.942c0 26.044-10.143 50.528-28.558 68.943L325.313 297.029l21.213 21.213 100.586-100.586c24.082-24.081 37.345-56.1 37.345-90.156s-13.263-66.074-37.345-90.155zM196.443 425.899c-18.415 18.415-42.899 28.558-68.942 28.558s-50.527-10.143-68.943-28.558C40.142 407.484 30 383 30 356.957c0-26.044 10.142-50.528 28.557-68.943l100.586-100.586-21.213-21.213L37.344 266.801C13.263 290.882 0 322.9 0 356.957c0 34.056 13.263 66.074 37.344 90.155 24.082 24.082 56.1 37.345 90.156 37.345s66.075-13.263 90.156-37.345l100.586-100.586-21.213-21.213-100.586 100.586z" />
    <Path d="m321.688 141.552 21.213 21.213-180.133 180.133-21.213-21.213 180.133-180.133z" />
  </Svg>
);

export default SvgLink;