import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg001Stonehenge = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M120 422h30v30h-30zM120 362h30v30h-30zM362 165h30v30h-30z" />
    <Path d="M490.033 346.82 452 308.787V165c0-26.136-16.804-48.409-40.171-56.618A59.65 59.65 0 0 0 422 75V0H90v75a59.65 59.65 0 0 0 10.171 33.382C76.804 116.591 60 138.864 60 165v23.787L21.967 226.82C7.801 240.985 0 259.82 0 279.853V512h210V135h92v377h210V399.853c0-20.033-7.801-38.868-21.967-53.033zM120 30h272v45c0 16.542-13.458 30-30 30H150c-16.542 0-30-13.458-30-30zM30 279.853c0-12.02 4.681-23.321 13.18-31.82L60 231.213V482H30zM180 482H90V165c0-16.542 13.458-30 30-30h60zm152-347h60c16.542 0 30 13.458 30 30v317h-90zm150 347h-30V351.213l16.82 16.82c8.5 8.5 13.18 19.8 13.18 31.82z" />
  </Svg>
);

export default Svg001Stonehenge;