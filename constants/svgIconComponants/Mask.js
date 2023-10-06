import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMask = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v512h512V0H0zm477.867 477.867H34.133V34.133h443.733v443.734z" />
    <Path d="M233.244 136.533c-28.232 0-51.2 22.967-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.967 51.2-51.2-22.968-51.2-51.2-51.2zm0 68.267c-9.411 0-17.067-7.656-17.067-17.067s7.656-17.067 17.067-17.067c9.411 0 17.067 7.656 17.067 17.067s-7.656 17.067-17.067 17.067z" />
    <Path d="M255.999 68.267C152.483 68.267 68.266 152.484 68.266 256s84.217 187.733 187.733 187.733c103.517 0 187.733-84.217 187.733-187.733S359.515 68.267 255.999 68.267zM102.399 256c0-84.695 68.905-153.6 153.6-153.6 73.185 0 134.571 51.453 149.906 120.081l-36.127-36.128-136.534 136.534-91.022-91.022-39.093 39.093c-.478-4.924-.73-9.912-.73-14.958zm153.6 153.6c-65.659 0-121.817-41.415-143.75-99.491l29.974-29.974 91.022 91.022 136.533-136.533 38.824 38.824c-8.691 76.51-73.808 136.152-152.603 136.152z" />
  </Svg>
);

export default SvgMask;
