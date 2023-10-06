import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgBrowser6 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M333.395 196.465v107.163h107.163V196.465H333.395zm71.442 71.442h-35.721v-35.721h35.721v35.721zM71.442 315.535v107.163h369.116V315.535H71.442zm333.395 71.442H107.164v-35.721h297.673v35.721zM202.419 196.465v107.163h107.163V196.465H202.419zm71.441 71.442h-35.72v-35.721h35.721v35.721zM71.442 196.465v107.163h107.163V196.465H71.442zm71.442 71.442h-35.721v-35.721h35.721v35.721z" />
    <Path d="M458.419 17.86H53.581C24.037 17.86 0 41.897 0 71.442v369.116c0 29.546 24.037 53.581 53.581 53.581h404.837c29.546 0 53.581-24.035 53.581-53.581V71.442c.001-29.545-24.034-53.582-53.58-53.582zm17.86 422.698c0 9.849-8.011 17.86-17.86 17.86H53.581c-9.848 0-17.86-8.011-17.86-17.86V160.744h440.558v279.814zm0-315.535H35.721V71.442c0-9.848 8.012-17.86 17.86-17.86h404.837c9.849 0 17.86 8.012 17.86 17.86v53.581z" />
    <Path d="M256 71.442h202.419v35.721H256z" />
    <Circle cx={71.442} cy={89.302} r={23.814} />
  </Svg>
);

export default SvgBrowser6;
