import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRupee = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 440"
    style={{
      enableBackground: "new 0 0 440 440",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M358.935.076H181.959c-1.298-.045-2.6-.076-3.908-.076L86.332.076H81.07c-.013.004 0 15.004 0 15.004v14.996c.013.004 5.287 0 5.287 0h95.07c28.135 1.157 52.84 16.754 67.712 40H81.07v30h180.534a96.514 96.514 0 0 1 2.331 21.13c0 50.277-38.522 91.18-85.872 91.18H81.07v30h116.993c47.35 0 85.872 40.915 85.872 91.207V440h30V333.594c0-50.298-29.444-93.535-71.246-111.852 30.891-21.789 51.246-58.722 51.246-100.535 0-7.206-.607-14.266-1.766-21.13h66.766v-30h-75.831c-6.855-15.348-16.693-28.955-28.734-40h104.565V.076z" />
  </Svg>
);

export default SvgRupee;