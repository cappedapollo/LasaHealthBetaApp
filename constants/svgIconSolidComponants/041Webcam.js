import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg041Webcam = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={256.184} cy={165} r={15} />
    <Path d="M256.184 60c-44.268 0-83.95 28.14-98.584 69.58-4.263 11.001-6.416 22.91-6.416 35.42s2.153 24.419 6.255 34.995C172.233 241.86 211.916 270 256.184 270s83.95-28.14 98.584-69.58c4.263-11.001 6.416-22.91 6.416-35.42s-2.153-24.419-6.255-34.995C340.134 88.14 300.451 60 256.184 60zm0 150c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" />
    <Path d="M451.184 150V45c0-24.814-20.186-45-45-45h-300c-24.814 0-45 20.186-45 45v105h30v30h-30v105c0 24.814 20.186 45 45 45h300c24.814 0 45-20.186 45-45V180h-30v-30zm-61.337 30c-1.221 10.8-3.268 21.359-7.101 31.26C364.128 263.994 313.151 300 256.184 300c-56.953 0-108.003-36.167-127.031-90.015-3.53-9.064-5.48-19.31-6.663-29.921l.021-30.064c1.221-10.8 3.278-21.359 7.11-31.26C148.239 66.006 199.216 30 256.184 30c56.953 0 108.003 36.167 127.031 90.015 3.53 9.064 5.48 19.31 6.663 29.921l-.02 30.064zM315.816 392h-14.633v-32h-90v32h-15c-11.856 0-23.456 4.809-31.816 13.184L57.551 512h126.898l30-30h82.734l30 30h127.266L347.643 405.192c-8.371-8.383-19.97-13.192-31.827-13.192z" />
  </Svg>
);

export default Svg041Webcam;