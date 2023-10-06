import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg024Yinyang = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={120.5} cy={256} r={25.5} />
    <Circle cx={391.5} cy={256} r={25.5} />
    <Path d="M391.673 135.327C325.134 135.327 271 189.46 271 256c0 83.082-67.592 150.673-150.673 150.673-33.853 0-65.132-11.225-90.317-30.144 11.763 21.988 26.84 42.359 44.97 60.49C123.332 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.668 512 324.38 512 256c0-4.193-.292-9.375-.875-13.125-6.288-60.674-57.143-107.548-119.452-107.548zM391.5 200.5c30.603 0 55.5 24.897 55.5 55.5s-24.897 55.5-55.5 55.5S336 286.603 336 256s24.897-55.5 55.5-55.5zm13.472 166.392 24.056 17.926c-37.681 50.564-95.223 81.981-158.028 86.357v-30.088c53.258-4.31 101.946-31.218 133.972-74.195z" />
    <Path d="M120.327 376.673C186.866 376.673 241 322.54 241 256c0-83.081 67.592-150.673 150.673-150.673 33.853 0 65.132 11.225 90.317 30.144-11.763-21.988-26.84-42.359-44.97-60.49C388.667 26.629 324.38 0 256 0S123.332 26.629 74.98 74.98C26.629 123.332 0 187.62 0 256c0 4.193 0 7.083.302 12.53 6.288 60.674 57.716 108.143 120.025 108.143zm.173-65.173C89.897 311.5 65 286.603 65 256s24.897-55.5 55.5-55.5S176 225.397 176 256s-24.897 55.5-55.5 55.5zm-13.472-166.392-24.056-17.926C120.653 76.619 178.195 45.202 241 40.826v30.088c-53.258 4.309-101.946 31.217-133.972 74.194z" />
  </Svg>
);

export default Svg024Yinyang;
