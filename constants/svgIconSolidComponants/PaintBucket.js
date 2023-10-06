import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaintBucket = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M147.449 100.129C169.168 109.719 197.598 115 227.5 115s58.332-5.281 80.051-14.871c3.198-1.412 3.675-3.819 3.675-5.129s-.478-3.717-3.675-5.129C285.832 80.281 257.402 75 227.5 75s-58.332 5.281-80.051 14.871c-3.198 1.412-3.675 3.819-3.675 5.129s.477 3.717 3.675 5.129zM357.5 290c0 24.813-20.187 45-45 45s-45-20.187-45-45v-72.271a344.92 344.92 0 0 1-30 2.132V360c0 24.813-20.187 45-45 45s-45-20.187-45-45V210.542c-29.954-7.423-56.271-18.951-77.086-33.873-6.618-4.745-12.594-9.789-17.914-15.096V345c0 60.751 78.35 110 175 110s175-49.249 175-110V161.567c-11.849 11.813-27.158 22.376-45 31.094V290z" />
    <Path d="M177.5 186.058V360c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V189.379c6.565.406 13.236.621 20 .621 24.891 0 48.562-2.827 70-7.913V290c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V172.964c45.333-17.167 75-45.683 75-77.964 0-52.467-78.35-95-175-95s-175 42.533-175 95c0 43.034 52.716 79.379 125 91.058zM135.332 62.427C160.785 51.189 193.517 45 227.5 45s66.715 6.189 92.168 17.427C332.965 68.298 341.226 80.78 341.226 95s-8.261 26.702-21.558 32.573C294.215 138.811 261.483 145 227.5 145s-66.715-6.189-92.168-17.427c-13.297-5.871-21.558-18.353-21.558-32.573s8.26-26.702 21.558-32.573z" />
  </Svg>
);

export default SvgPaintBucket;