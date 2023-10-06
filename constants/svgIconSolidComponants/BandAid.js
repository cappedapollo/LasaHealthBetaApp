import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBandAid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M137.711 137.711v236.578h236.578V137.711H137.711zm210.903 169.777h-41.126v41.126H204.511v-41.126h-41.126V204.511h41.126v-41.126h102.977v41.126h41.126v102.977z" />
    <Path d="M277.071 234.928v-41.126h-42.143v41.126h-41.126v42.143h41.126v41.126h42.143v-41.126h41.126v-42.143z" />
    <Path d="M442.518 0h-29.739l-.662 14.515c-.464 10.187-8.827 18.166-19.037 18.166s-18.572-7.98-19.037-18.167L373.3 0h-29.061l-.662 14.515c-.464 10.187-8.827 18.166-19.037 18.166-10.21 0-18.572-7.979-19.037-18.166L304.76 0h-29.061l-.662 14.515c-.464 10.187-8.827 18.166-19.037 18.166-10.21 0-18.572-7.979-19.037-18.166L236.22 0h-29.061l-.662 14.515c-.464 10.187-8.827 18.166-19.037 18.166-10.21 0-18.572-7.979-19.037-18.166L167.68 0h-29.061l-.663 14.514c-.465 10.187-8.828 18.167-19.037 18.167s-18.572-7.979-19.037-18.166L99.18 0H69.441v496.791L69.482 512h29.739l.662-14.515c.464-10.187 8.827-18.166 19.037-18.166s18.572 7.98 19.037 18.167L138.7 512h29.061l.662-14.515c.464-10.187 8.827-18.166 19.037-18.166 10.21 0 18.572 7.979 19.037 18.166L207.24 512h29.061l.662-14.515c.464-10.187 8.827-18.166 19.037-18.166 10.21 0 18.572 7.979 19.037 18.166L275.78 512h29.061l.662-14.515c.464-10.187 8.827-18.166 19.037-18.166s18.572 7.979 19.037 18.166l.742 14.515h29.061l.663-14.514c.465-10.187 8.828-18.167 19.037-18.167s18.572 7.979 19.037 18.166L412.82 512h29.739V15.209L442.518 0zm-37.813 404.705H107.294V107.294h297.412v297.411z" />
  </Svg>
);

export default SvgBandAid;