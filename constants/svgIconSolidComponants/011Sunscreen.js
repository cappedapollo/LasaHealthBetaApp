import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg011Sunscreen = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M152.587 510h204.825v-75H152.587z" />
    <Circle cx={255} cy={210} r={15} />
    <Path d="M90 0h330v75H90zM149.73 405h210.54l57.143-300H92.587zM300 345h-90v-30h90zM188.306 172.558l31.007 10.075c5.252-6.833 12.415-12.119 20.687-15.053V135h30v32.58c8.271 2.934 15.435 8.22 20.687 15.053l31.007-10.075 9.271 28.531-30.994 10.071a44.723 44.723 0 0 1-7.912 24.327l19.161 26.373-24.27 17.633-19.15-26.358a44.845 44.845 0 0 1-25.598 0l-19.15 26.358-24.271-17.633 19.161-26.373a44.723 44.723 0 0 1-7.912-24.327l-30.994-10.071z" />
  </Svg>
);

export default Svg011Sunscreen;
