import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg007Flower = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M463.271 383.363c-.778-2.956-19.654-72.839-76.869-111.776-9.378-6.382-19.151-11.494-28.953-15.591 9.8-4.097 19.575-9.202 28.953-15.584 57.215-38.937 76.091-108.82 76.866-111.776l4.373-16.665-17.107-2.047c-2.044-.245-35.349-3.991-74.359 5.489 1.084-32.796-5.185-57.608-5.519-58.902l-4.314-16.68-15.932 6.558c-1.116.459-22.705 9.476-46.941 28.179-14.116-35.94-34.836-60.068-36.153-61.579L256 0l-11.317 12.989c-1.317 1.511-22.036 25.638-36.153 61.579-24.237-18.703-45.827-27.72-46.941-28.179l-15.932-6.558-4.314 16.68c-.334 1.294-6.602 26.105-5.519 58.901-39.009-9.478-72.314-5.733-74.359-5.488l-17.107 2.047 4.373 16.665c.775 2.956 19.652 72.839 76.866 111.776 9.378 6.382 19.151 11.487 28.951 15.584-9.8 4.097-19.574 9.208-28.951 15.59-57.213 38.938-76.089 108.821-76.865 111.777l-4.373 16.665 17.107 2.047c.923.11 8.206.935 19.512.935 13.748 0 33.439-1.22 54.847-6.421-1.084 32.796 5.185 57.607 5.519 58.901l4.314 16.68 15.932-6.558c1.116-.459 22.705-9.476 46.941-28.179 14.116 35.94 34.836 60.068 36.153 61.579L256.001 512l11.317-12.989c1.317-1.511 22.036-25.638 36.153-61.579 24.237 18.703 45.826 27.72 46.941 28.179l15.932 6.558 4.314-16.68c.334-1.294 6.602-26.104 5.519-58.9 21.41 5.202 41.099 6.42 54.847 6.42 11.301 0 18.589-.824 19.512-.935l17.107-2.047-4.372-16.664zM344.794 82.928c1.308 11.097 2.197 26.159.688 42.664-9.189 3.963-18.335 8.834-27.132 14.821-.637.433-1.262.898-1.895 1.342.012-.776.025-1.552.025-2.331 0-11.724-1.356-23.036-3.614-33.754 11.446-9.959 22.949-17.528 31.928-22.742zm-36.045 106.203c8.16-9.435 17.053-17.478 26.489-23.899 31.57-21.485 69.967-25.738 92.539-26.132-8.653 20.86-26.7 55.014-58.265 76.496-25.171 17.13-54.683 23.304-77.06 25.303-2.44-.19-4.797-.337-7.065-.447 8.06-13.18 17.111-30.812 23.362-51.321zM256.026 48.177c12.372 18.817 30.434 52.861 30.434 91.248 0 38.209-18.109 72.365-30.488 91.248-12.372-18.817-30.433-52.861-30.433-91.248.001-38.213 18.113-72.372 30.487-91.248zm-88.817 34.722c8.954 5.194 20.433 12.755 31.927 22.769-2.258 10.719-3.614 22.032-3.614 33.757 0 .779.013 1.555.025 2.331-.632-.444-1.257-.908-1.894-1.342-8.798-5.987-17.944-10.859-27.133-14.822-1.514-16.521-.621-31.595.689-42.693zm-24.721 132.697c-31.59-21.499-49.641-55.692-58.285-76.541 22.517.357 60.823 4.58 92.56 26.178 9.435 6.42 18.328 14.463 26.488 23.898 6.251 20.509 15.302 38.142 23.361 51.321-2.268.111-4.626.257-7.067.447-22.376-2-51.886-8.173-77.057-25.303zm24.718 213.476c-1.308-11.097-2.197-26.159-.687-42.664 9.189-3.963 18.335-8.834 27.132-14.821.637-.433 1.262-.898 1.895-1.342-.012.776-.025 1.552-.025 2.331 0 11.724 1.356 23.036 3.614 33.754-11.447 9.959-22.95 17.528-31.929 22.742zm36.045-106.203c-8.16 9.435-17.053 17.478-26.489 23.899-31.57 21.485-69.967 25.738-92.539 26.132 8.653-20.86 26.7-55.014 58.265-76.496 25.175-17.133 54.692-23.306 77.07-25.304 2.437.19 4.791.337 7.056.447-8.06 13.18-17.112 30.812-23.363 51.322zm52.723 140.954c-12.372-18.817-30.434-52.861-30.434-91.248 0-38.209 18.109-72.365 30.488-91.248 12.372 18.817 30.433 52.861 30.433 91.248-.001 38.212-18.113 72.372-30.487 91.248zm88.817-34.722c-8.954-5.194-20.433-12.755-31.927-22.769 2.258-10.719 3.614-22.032 3.614-33.757 0-.779-.013-1.555-.025-2.331.632.444 1.257.908 1.894 1.342 8.798 5.987 17.944 10.859 27.132 14.823 1.515 16.52.622 31.594-.688 42.692zm-9.554-82.333c-9.435-6.42-18.328-14.463-26.488-23.898-6.251-20.51-15.303-38.143-23.362-51.322 2.266-.11 4.623-.258 7.062-.448 22.376 1.999 51.889 8.173 77.063 25.305 31.59 21.499 49.641 55.692 58.285 76.541-22.516-.358-60.823-4.581-92.56-26.178z" />
    <Circle cx={52.714} cy={256.005} r={15.01} />
    <Circle cx={459.286} cy={256.005} r={15.01} />
  </Svg>
);

export default Svg007Flower;