import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWikipedia = (props) => (
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
      d="M0 0v455h455V0H0zm385 118.141a3.473 3.473 0 0 1-3.477 3.47h-9.736a8.726 8.726 0 0 0-8.081 5.439l-88.815 217.909L230.16 244.55 182.3 344.958 90.709 126.964a8.733 8.733 0 0 0-8.049-5.345h-9.181A3.483 3.483 0 0 1 70 118.14v-8.099h79.147l-.223 8.193a3.477 3.477 0 0 1-3.477 3.385h-13.249c-4.926 0-8.302 4.971-6.495 9.548l64.305 162.675 32.522-70.485-41.099-96.434a8.735 8.735 0 0 0-8.031-5.312h-6.392a3.476 3.476 0 0 1-3.479-3.47v-8.099h59.436v8.099c0 1.918-1.56 3.47-3.477 3.47-5.013 0-8.398 5.133-6.421 9.745l24.288 56.572 24.799-56.52c2.021-4.614-1.355-9.788-6.401-9.788h-9.284a3.477 3.477 0 0 1-3.479-3.479v-8.099h62.242v8.099a3.478 3.478 0 0 1-3.479 3.479h-10.358a8.725 8.725 0 0 0-7.903 5.03l-38.312 81.925 35.772 84.058 62.589-161.542c1.739-4.57-1.637-9.472-6.53-9.472H321.54a3.483 3.483 0 0 1-3.479-3.479v-8.099H385v8.1z"
    />
  </Svg>
);

export default SvgWikipedia;
