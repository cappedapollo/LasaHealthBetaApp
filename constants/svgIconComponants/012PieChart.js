import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg012Piechart = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M512 256c0-68.38-26.629-132.667-74.98-181.02C388.667 26.629 324.38 0 256 0h-15v32.673c-54.141 3.559-104.553 26.332-143.273 65.053C59.006 136.447 36.247 186.86 32.69 241H0v15c0 68.38 26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512h15v-32.682c54.141-3.558 104.553-26.324 143.273-65.044 38.721-38.721 61.494-89.132 65.053-143.273H512zM241 62.745V241H62.772C70.075 146.057 146.058 70.046 241 62.745zm0 418.763C128.314 474.084 37.916 383.686 30.492 271H241zm30-32.271V271h178.252C441.95 365.943 365.943 441.934 271 449.237zM271 241V30.492C383.686 37.916 474.084 128.314 481.508 241z" />
    <Path d="M130.75 306.75h72.667v30H130.75zM130.75 370.25h72.667v30H130.75zM308.583 111.75h72.667v30h-72.667zM308.583 175.25h72.667v30h-72.667z" />
  </Svg>
);

export default Svg012Piechart;
