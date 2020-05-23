import React from "react";
import ReactDom from "react-dom";

// component -> Capital letter (fits with name of file)
const App = () => {
    return <div>Thanks Abhi</div>;
}

// "app"-element-id needs to be rendered first, for "App"-component (to understand it)
// and be pushed into it. 
ReactDom.render(<App />, document.getElementById("app"));