import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg042Flower = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M492.443 219.46c-3.529-2.353-6.013-6.014-6.815-10.046-.469-2.358-.551-5.882 1.721-9.276 8.189-12.229 9.716-27.647 4.084-41.244s-17.613-23.419-32.049-26.275a13.83 13.83 0 0 1-8.871-5.92 13.822 13.822 0 0 1-2.075-10.459c2.939-14.697-1.702-29.868-12.416-40.582-10.409-10.409-25.085-14.932-39.257-12.098-3.849.772-8.016-.099-11.434-2.383-3.164-2.114-5.277-5.154-5.951-8.56a43.826 43.826 0 0 0-26.275-32.051 43.834 43.834 0 0 0-41.243 4.083c-3.394 2.272-6.917 2.191-9.278 1.721-4.032-.802-7.693-3.285-10.045-6.814C284.376 7.312 270.717 0 256 0s-28.376 7.311-36.54 19.556c-2.353 3.529-6.014 6.013-10.046 6.815-2.359.468-5.882.552-9.276-1.721a43.836 43.836 0 0 0-41.245-4.084 43.828 43.828 0 0 0-26.274 32.049 13.83 13.83 0 0 1-5.921 8.872 13.822 13.822 0 0 1-10.459 2.075c-14.431-2.888-29.448 1.791-40.168 12.511-10.719 10.719-15.396 25.733-12.511 40.163a13.83 13.83 0 0 1-2.076 10.464 13.82 13.82 0 0 1-8.867 5.92c-14.438 2.856-26.419 12.678-32.051 26.275s-4.105 29.014 4.083 41.242c2.273 3.394 2.191 6.919 1.722 9.279-.802 4.031-3.286 7.692-6.814 10.044C7.311 227.624 0 241.284 0 256s7.31 28.376 19.555 36.541c3.529 2.353 6.013 6.014 6.814 10.045.469 2.359.552 5.883-1.721 9.276a43.83 43.83 0 0 0-4.083 41.245 43.824 43.824 0 0 0 32.049 26.273c3.976.787 7.563 3.194 9.842 6.605 2.015 3.015 2.762 6.487 2.104 9.775a43.832 43.832 0 0 0 12.012 39.668 43.823 43.823 0 0 0 39.663 12.009 13.826 13.826 0 0 1 10.463 2.076 13.818 13.818 0 0 1 5.919 8.868c2.925 14.785 13.005 27.064 26.963 32.846 13.45 5.572 28.611 4.121 40.554-3.878 3.395-2.273 6.919-2.191 9.279-1.722 4.031.802 7.691 3.285 10.043 6.813A43.833 43.833 0 0 0 256 511.998a43.826 43.826 0 0 0 36.538-19.554c2.353-3.529 6.016-6.014 10.048-6.816 2.359-.47 5.882-.552 9.275 1.72a43.83 43.83 0 0 0 41.242 4.084 43.826 43.826 0 0 0 26.275-32.05c.736-3.722 3.162-7.195 6.655-9.529 3.339-2.231 7.25-3.11 10.725-2.417a43.827 43.827 0 0 0 39.668-12.01 43.83 43.83 0 0 0 12.011-39.664 13.83 13.83 0 0 1 2.076-10.464 13.818 13.818 0 0 1 8.868-5.919 43.83 43.83 0 0 0 32.052-26.275 43.827 43.827 0 0 0-4.082-41.241c-2.273-3.395-2.191-6.92-1.722-9.28.802-4.031 3.285-7.692 6.813-10.043A43.823 43.823 0 0 0 512 256a43.831 43.831 0 0 0-19.557-36.54zm-38.88-57.411c4.642.918 8.344 3.953 10.155 8.325 1.812 4.374 1.34 9.138-1.294 13.071-6.239 9.315-8.447 20.617-6.218 31.822 1.98 9.958 7.394 19.076 15.118 25.733H329.49c-1.945-9.543-5.717-18.425-10.919-26.283l99.719-98.936c-.727 9.722 1.776 19.349 7.28 27.584 6.527 9.769 16.468 16.405 27.993 18.684zM256 301c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45zm40.732-245.206c11.203 2.228 22.507.02 31.824-6.219 3.932-2.633 8.694-3.105 13.068-1.293 4.373 1.812 7.408 5.513 8.326 10.157 2.231 11.279 8.877 21.11 18.713 27.683 8.672 5.795 19.145 8.438 29.346 7.521l-100.635 99.845a74.584 74.584 0 0 0-26.375-10.978V40.676c6.657 7.724 15.775 13.137 25.733 15.118zM143.365 86.431c9.768-6.527 16.403-16.468 18.684-27.994.918-4.642 3.953-8.343 8.325-10.154 4.373-1.811 9.137-1.34 13.071 1.294 9.316 6.238 20.618 8.447 31.822 6.218 9.957-1.981 19.076-7.395 25.733-15.118V182.51a74.601 74.601 0 0 0-26.33 10.948L114.852 93.64c10.036.963 20.014-1.531 28.513-7.209zm-93.79 97.012c-2.634-3.932-3.105-8.695-1.294-13.068 1.812-4.373 5.513-7.408 10.157-8.326 11.523-2.28 21.463-8.915 27.99-18.683 5.679-8.499 8.174-18.478 7.211-28.515l99.819 99.819A74.55 74.55 0 0 0 182.51 241H40.676c7.723-6.657 13.137-15.774 15.117-25.732 2.23-11.206.021-22.508-6.218-31.825zm8.861 166.508c-4.642-.918-8.343-3.953-10.154-8.325-1.812-4.374-1.34-9.138 1.294-13.072 6.239-9.315 8.447-20.617 6.218-31.822-1.981-9.958-7.395-19.076-15.118-25.732H182.51c1.949 9.562 5.731 18.46 10.948 26.33l-98.756 98.756c.61-9.352-1.899-18.684-7.301-26.768-6.674-9.986-17.231-17.046-28.965-19.367zm156.831 106.254c-11.28-2.243-22.57.02-31.825 6.218-4.99 3.342-9.898 2.117-12.381 1.088-4.67-1.934-8.04-6.028-9.013-10.951-2.279-11.523-8.914-21.464-18.682-27.991-8.193-5.475-17.761-7.98-27.432-7.291l98.736-98.736c7.869 5.217 16.768 9 26.33 10.948v141.832c-6.657-7.722-15.776-13.136-25.733-15.117zm154.102-31.294c-10.07 6.728-17.147 17.171-19.418 28.651-.918 4.643-3.953 8.344-8.326 10.156-4.373 1.811-9.136 1.339-13.069-1.294-9.314-6.237-20.614-8.446-31.821-6.217-9.958 1.981-19.077 7.395-25.735 15.119V329.491a74.566 74.566 0 0 0 26.375-10.978l99.553 98.771c-9.567-.598-19.173 2.023-27.559 7.627zm93.057-96.354c2.633 3.932 3.104 8.695 1.293 13.067-1.812 4.374-5.514 7.409-10.157 8.327-11.523 2.279-21.463 8.914-27.99 18.682-5.504 8.236-8.007 17.864-7.28 27.587l-99.719-98.937c5.202-7.858 8.974-16.74 10.919-26.293h141.834c-7.723 6.666-13.135 15.784-15.116 25.741-2.231 11.207-.023 22.51 6.216 31.826z" />
  </Svg>
);

export default Svg042Flower;
