import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCompass = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M479.499 324.073h-60.916L327.118 165.65a72.744 72.744 0 0 0 1.516-14.789c0-20.547-8.59-39.115-22.35-52.34V0H205.711v98.522c-13.761 13.226-22.35 31.793-22.35 52.34 0 5.066.525 10.012 1.516 14.788L93.414 324.073H32.501v33.525h41.557l-32.574 56.42 58.2 33.601-27.493 47.617 29.032 16.762 88.968-154.401h49.045v27.937h33.525v-27.937h49.045L410.969 512l29.032-16.762-27.54-47.701 58.052-33.516-32.574-56.422h41.56v-33.526zM239.237 33.525h33.525v46.674A72.488 72.488 0 0 0 256 78.224c-5.77 0-11.378.696-16.762 1.975V33.525zm16.762 78.224c21.567 0 39.112 17.546 39.112 39.112s-17.546 39.112-39.112 39.112-39.112-17.546-39.112-39.112 17.546-39.112 39.112-39.112zM116.315 418.51 87.28 401.748 203.308 200.78c7.727 8.153 17.31 14.527 28.079 18.417L116.315 418.51zm156.447-94.437v-27.937h-33.525v27.937H209.55L256 243.618l46.451 80.455h-29.689zm122.924 94.44L280.611 219.198c10.768-3.89 20.352-10.265 28.079-18.417l116.028 200.97-29.032 16.762z" />
  </Svg>
);

export default SvgCompass;
