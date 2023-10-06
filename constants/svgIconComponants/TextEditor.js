import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextEditor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M409.6 0v34.133h-28.444v34.133H409.6V102.4h34.133v28.444h34.133V102.4H512V0H409.6zm68.267 68.267h-34.133V34.133h34.133v34.134zM102.4 443.733V409.6H68.266v-28.444H34.132V409.6H0V512h102.4v-34.133h28.444v-34.133H102.4zm-34.133 34.134H34.133v-34.133h34.133v34.133zM34.132 153.6h34.133v34.133H34.132zM34.132 210.489h34.133v34.133H34.132zM34.132 324.267h34.133V358.4H34.132zM102.4 34.133V0H0v102.4h34.132v28.444h34.133V102.4H102.4V68.267h28.444V34.133H102.4zM68.267 68.267H34.133V34.133h34.133v34.134zM34.132 267.378h34.133v34.133H34.132zM153.6 443.733h34.133v34.133H153.6zM210.489 443.733h34.133v34.133h-34.133zM324.267 443.733H358.4v34.133h-34.133zM267.378 443.733h34.133v34.133h-34.133zM324.267 34.133H358.4v34.133h-34.133zM267.378 34.133h34.133v34.133h-34.133zM210.489 34.133h34.133v34.133h-34.133zM153.6 34.133h34.133v34.133H153.6zM443.733 210.489h34.133v34.133h-34.133zM443.733 324.267h34.133V358.4h-34.133zM443.733 267.378h34.133v34.133h-34.133zM477.867 409.6v-28.444h-34.133V409.6H409.6v34.133h-28.444v34.133H409.6V512H512V409.6h-34.133zm0 68.267h-34.133v-34.133h34.133v34.133zM443.733 153.6h34.133v34.133h-34.133zM256 104.06 117.453 381.156h38.16l39.823-79.644h121.127l39.823 79.644h38.161L256 104.06zm-43.497 163.318L256 180.384l43.496 86.993h-86.993z" />
  </Svg>
);

export default SvgTextEditor;
