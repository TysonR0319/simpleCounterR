//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counters from "/workspace/react-hello/src/js/component/Counter.jsx";

//render your react application
ReactDOM.render(<Counters />, document.querySelector("#app"));

let number = 0;

setInterval(() =>{
    number++
    ReactDOM.render(<Counters number={number}/>, document.querySelector("#app"))
}, 1000)