import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgPharmacy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M271.208 240.188v-34.041h-30.417v34.041h-34.04v30.417h34.04v34.04h30.417v-34.04h34.041v-30.417z" />
    <Path d="M410.794 218.137c.159-2.877.248-5.773.248-8.69v-63.142H100.958v60.826c-12.029-8.448-19.845-22.457-19.845-37.82 0-25.438 20.695-46.133 46.133-46.133h372.199l4.204-8.408C509.19 103.683 512 91.763 512 79.34 512 35.593 476.408 0 432.661 0c-29.481 0-56.42 16.527-70.05 42.065H127.245C57.082 42.065 0 99.147 0 169.311s57.082 127.245 127.245 127.245h.564c25.238 37.023 66.078 62.598 112.982 67.186v25.08H91.252c-36.339 0-65.904 29.565-65.904 65.904v15.209h215.443v11.648h-111.44V512h253.296v-30.417h-111.44v-11.648h113.545c70.163 0 127.245-57.082 127.245-127.245 0-32.075-12.016-62.731-33.833-86.323-18.132-19.608-41.644-32.863-67.37-38.23zM30.417 169.311c0-53.391 43.437-96.828 96.828-96.828h255.807l3.654-9.976c7.033-19.193 25.501-32.089 45.954-32.089 26.975 0 48.922 21.947 48.922 48.922 0 4.602-.625 9.091-1.864 13.421H127.245c-42.21 0-76.55 34.34-76.55 76.55a76.495 76.495 0 0 0 18.591 49.96 76.815 76.815 0 0 0 35.187 23.119c.081.376.18.746.265 1.12.204.907.419 1.81.639 2.711.39 1.607.809 3.205 1.25 4.797.094.34.185.681.282 1.021a152.993 152.993 0 0 0 4.221 12.759c-45.751-7.694-80.713-47.584-80.713-95.487zm354.337 127.245c25.438 0 46.133 20.695 46.133 46.133s-20.695 46.133-46.133 46.133H271.208v-25.08c46.903-4.588 87.744-30.162 112.982-67.186h.564zm-251.338-64.603c-.042-.226-.085-.451-.125-.677-.114-.639-.216-1.282-.319-1.923-.07-.437-.143-.874-.209-1.313a125.143 125.143 0 0 1-1.388-18.592v-32.725h249.249v32.725c0 63.57-47.845 116.169-109.416 123.695v-.084h-30.417v.084c-54.129-6.618-97.646-48.071-107.375-101.19zm251.339 207.564H59.192c5.705-11.979 17.932-20.278 32.06-20.278h293.503c42.21 0 76.55-34.34 76.55-76.55 0-37.075-26.494-68.08-61.543-75.074a153.03 153.03 0 0 0 6.385-19.368c18.948 4.288 36.251 14.239 49.691 28.771 16.603 17.953 25.747 41.275 25.747 65.671-.002 53.391-43.439 96.828-96.83 96.828z" />
    <Circle cx={432.756} cy={63.451} r={16.146} />
  </Svg>
);

export default SvgPharmacy;
