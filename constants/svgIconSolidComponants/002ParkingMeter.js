import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg002Parkingmeter = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={256} cy={320.284} r={18.734} />
    <Path d="M256 67.469c-39.772 0-72.13 32.357-72.13 72.13v7.452h62.639l16.861-35.579 27.11 12.847-10.772 22.731h48.422v-7.452c0-39.772-32.358-72.129-72.13-72.129z" />
    <Path d="M256 0c-76.975 0-139.599 62.624-139.599 139.599v89.128l46.723 172.541h185.751l46.723-172.541v-89.128C395.599 62.624 332.975 0 256 0zm0 369.019c-26.872 0-48.734-21.862-48.734-48.734S229.128 271.55 256 271.55s48.734 21.862 48.734 48.734-21.862 48.735-48.734 48.735zM315.776 239.3H196.224v-30h119.552zm42.354-62.249H153.87v-37.452c0-56.314 45.815-102.13 102.13-102.13s102.13 45.815 102.13 102.13zM217.126 431.268h77.747V512h-77.747z" />
  </Svg>
);

export default Svg002Parkingmeter;
