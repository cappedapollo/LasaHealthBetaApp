import * as React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";

const Svg022Juggler = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={142.352} cy={129.577} r={51.465} />
    <Ellipse
      cx={369.201}
      cy={129.577}
      rx={51.465}
      ry={51.466}
      transform="rotate(-22.48 368.99 129.311)"
    />
    <Circle
      cx={255.777}
      cy={51.629}
      transform="rotate(-45 255.786 51.68)"
      r={51.465}
    />
    <Path d="m158.815 407.15-53.971-90.037c-5.819-9.708-18.485-12.727-28.058-6.688-9.257 5.84-12.166 17.996-6.556 27.394l51.053 85.524-25.82 15.275-50.717-85.728c-7.046-11.109-9.245-24.309-6.188-37.205 3.12-13.163 11.67-24.709 23.457-31.677a51.812 51.812 0 0 1 12.403-5.293l-5.43-101.909c-.97-18.208-16.016-32.474-34.25-32.474-18.906 0-34.247 15.299-34.298 34.206L0 341.457l68.224 117.408-19.992 52.972h100.333l18.055-34.704c8.537-23.497 5.81-48.795-7.53-69.54zM512 341.457l-.441-162.918c-.051-18.906-15.392-34.206-34.298-34.206-18.233 0-33.28 14.266-34.25 32.474l-5.43 101.909a51.732 51.732 0 0 1 12.403 5.293c11.787 6.968 20.337 18.514 23.457 31.677 3.057 12.896.858 26.096-6.188 37.205l-50.717 85.728-25.82-15.275 51.053-85.524c5.61-9.398 2.7-21.554-6.556-27.394-9.572-6.039-22.239-3.019-28.058 6.688l-53.971 90.037-.274.443c-13.339 20.745-16.067 46.043-7.53 69.54l18.055 34.704h100.333l-19.992-52.972z" />
  </Svg>
);

export default Svg022Juggler;