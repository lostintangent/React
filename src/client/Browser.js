import FilterApp from "../FilterApp";
import React from "react";

// The ReactJS CDT extension looks for this global
// in order to activate itself, and therefore, since
// we're using modules instead of globals, we need to
// artificially expose the React object in order
// to make use of the tools. Hopefully this goes away soon :)
window.react = React;

React.render(<FilterApp />, document.body);