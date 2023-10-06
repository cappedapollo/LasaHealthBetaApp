import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCoat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M112.914 96.21 4.07 215.94l11.997 59.983 95.973-59.983-23.993 263.927L238.005 512V144.322zM507.93 215.94 399.084 96.21l-125.089 48.113v367.676l149.958-32.133-23.993-263.927 95.973 59.983 11.997-59.982zM321.982 413.883h-.005c-13.226 0-23.989-10.762-23.989-23.991 0-13.23 10.763-23.993 23.993-23.993 13.231 0 23.993 10.763 23.993 23.993.001 13.229-10.762 23.991-23.992 23.991zm0-83.977h-.005c-13.226 0-23.989-10.762-23.989-23.991 0-13.23 10.763-23.993 23.993-23.993 13.231 0 23.993 10.763 23.993 23.993.001 13.229-10.762 23.991-23.992 23.991zm0-83.974c-13.23 0-23.993-10.763-23.993-23.993 0-13.23 10.763-23.993 23.993-23.993 13.23 0 23.993 10.763 23.993 23.993 0 13.229-10.763 23.993-23.993 23.993zM383.989 63.456C369.599 26.997 317.756 0 256 0S142.4 26.997 128.011 63.458l109.994 42.305V71.98h35.99v33.783l109.994-42.307z" />
  </Svg>
);

export default SvgCoat;