import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRss = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm141.435 372.387c-7.656 7.59-18.047 12.219-29.614 12.219-11.555 0-21.945-4.646-29.549-12.219C74.681 364.801 70 354.462 70 342.961c0-11.502 4.681-21.875 12.272-29.483 7.621-7.569 17.994-12.237 29.549-12.237 11.567 0 21.958 4.668 29.579 12.254 7.621 7.621 12.272 17.964 12.307 29.466-.035 11.501-4.686 21.822-12.272 29.426zM217.468 385s0-.101-.017-.101c-.066-39.41-15.431-76.597-43.221-104.352-27.786-27.838-64.925-43.256-104.195-43.291v-60.139c57.299.035 109.169 23.327 146.833 61.014 37.651 37.682 60.944 89.565 60.996 146.869h-60.396zm107.24 0c-.105-140.495-114.196-254.774-254.572-254.879V70c86.817.035 165.432 35.359 222.495 92.422C349.659 219.485 384.965 298.165 385 385h-60.292z"
    />
  </Svg>
);

export default SvgRss;
