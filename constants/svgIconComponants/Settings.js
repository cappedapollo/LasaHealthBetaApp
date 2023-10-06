import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M485 287.5v-100h-66.946a180.525 180.525 0 0 0-16.818-40.096l44.558-44.558-70.711-70.711-45.141 45.142a180.262 180.262 0 0 0-42.441-16.684V0h-100v63.446a180.41 180.41 0 0 0-41.364 19.05l-43.29-43.29-70.711 70.711 46.716 46.716a180.382 180.382 0 0 0-14.45 40.866H0v100h70.103a180.882 180.882 0 0 0 17.394 36.363l-48.291 48.291 70.711 70.711 51.717-51.717a180.71 180.71 0 0 0 35.865 13.257V485h100v-73.449a180.898 180.898 0 0 0 35.095-15.317l49.559 49.56 70.711-70.711-50.143-50.143a180.697 180.697 0 0 0 15.332-37.439H485zm-74.562 87.583-28.285 28.284-45.379-45.38-10.22 6.766a151.272 151.272 0 0 1-47.624 20.859l-11.43 2.801V455h-40v-65.214l-12.331-2.23a151.084 151.084 0 0 1-48.775-17.875l-9.967-5.752-46.509 46.509-28.284-28.284 44.859-44.859-7.517-10.362c-10.678-14.721-18.552-31.023-23.401-48.453l-3.056-10.98H30v-40h59.781l1.913-12.78a150.926 150.926 0 0 1 18.625-53.326l5.752-9.967-41.509-41.509 28.284-28.284 39.859 39.859 10.362-7.517c16.024-11.624 33.856-19.896 53.002-24.587l11.43-2.801V30h40v55.214l12.331 2.23c19.427 3.513 37.743 10.684 54.44 21.314l10.152 6.463 40.659-40.659 28.284 28.284-40.379 40.38 6.765 10.22c10.565 15.96 17.935 33.514 21.902 52.174l2.526 11.88H455v40h-60.82l-2.525 11.881c-3.775 17.758-10.643 34.544-20.413 49.891l-6.462 10.152 45.658 45.659z" />
    <Path d="M242.5 135C185.981 135 140 180.981 140 237.5S185.981 340 242.5 340 345 294.019 345 237.5 299.019 135 242.5 135zm0 175c-39.977 0-72.5-32.523-72.5-72.5s32.523-72.5 72.5-72.5 72.5 32.523 72.5 72.5-32.523 72.5-72.5 72.5z" />
  </Svg>
);

export default SvgSettings;
