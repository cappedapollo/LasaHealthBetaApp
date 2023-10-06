import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFonts = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m215.77 59.535-47.628-47.628H0v434.605c0 29.546 24.037 53.581 53.581 53.581h404.837c29.545 0 53.581-24.035 53.581-53.581V59.535H215.77zm260.509 386.977c0 9.849-8.012 17.86-17.86 17.86H53.581c-9.848 0-17.86-8.011-17.86-17.86V47.628h117.625l47.628 47.628h275.305v351.256z" />
    <Path d="M404.837 244.093v12.23c-12.039-7.728-26.337-12.23-41.674-12.23-42.676 0-77.395 34.72-77.395 77.395 0 42.676 34.72 77.395 77.395 77.395 15.337 0 29.635-4.502 41.674-12.231v12.231h35.721v-154.79h-35.721zm-41.674 119.07c-22.979 0-41.674-18.695-41.674-41.674s18.695-41.674 41.674-41.674 41.674 18.695 41.674 41.674-18.695 41.674-41.674 41.674zM178.326 140.823 63.151 398.884h39.117l34.543-77.395h83.383l34.705 77.395h39.148L178.326 140.823zm-25.573 144.944 25.651-57.474 25.773 57.474h-51.424z" />
  </Svg>
);

export default SvgFonts;