import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg007Laptop = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={151} cy={181} r={15} />
    <Circle cx={361} cy={151} r={15} />
    <Circle cx={256} cy={241} r={15} />
    <Path d="M482 376V46H30v330zM361 196a44.698 44.698 0 0 1-22.433-6.016l-40.601 34.801A44.755 44.755 0 0 1 301 241c0 24.813-20.187 45-45 45s-45-20.187-45-45c0-2.739.259-5.416.73-8.021l-31.366-17.923C172.476 221.867 162.215 226 151 226c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45c0 2.739-.259 5.416-.73 8.021l31.366 17.923C234.524 200.133 244.785 196 256 196a44.708 44.708 0 0 1 22.433 6.016l40.601-34.801A44.776 44.776 0 0 1 316 151c0-24.813 20.187-45 45-45s45 20.187 45 45-20.187 45-45 45zm.333 60v30h-30v-30zM271 136v30h-30v-30h-30v-30h30v30zm120.333 90h30v30h-30zM180.667 346H90v-30h90.667zm0-60H90v-30h90.667zm120.666 60h-90.667v-30h90.667zM422 346h-90.667v-30H422zM482 406H0v15c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-15z" />
  </Svg>
);

export default Svg007Laptop;