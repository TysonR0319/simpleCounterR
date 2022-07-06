import { number } from "prop-types";
import React from "react";

export default function Counters(props){
   
    let digit1 
    let digit2  
    let digit3  
    let digit4  
    let digit5 
    let digit6  
   
    if (props.number < 10){
        digit1 = props.number
    } else if (props.number < 100){
        const digits = props.number.toString().split("")
        console.log(digits)
        digit1 = digits[1]
        digit2 = digits[0]
    } else if (props.number < 999) {
        const digits = props.number.toString().split("")
        console.log(digits)
        digit1 = digits[2]
        digit2 = digits[1]
        digit3 = digits[0]
    } else if (props.number < 9999) {
        const digits = props.number.toString().split("")
        console.log(digits)
        digit1 = digits[3]
        digit2 = digits[2]
        digit3 = digits[1]
        digit4 = digits[0]
    } else if (props.number < 99999) {
        const digits = props.number.toString().split("")
        console.log(digits)
        digit1 = digits[4]
        digit2 = digits[3]
        digit3 = digits[2]
        digit4 = digits[1]
        digit5 = digits[0]
    } else if (props.number < 999999) {
        const digits = props.number.toString().split("")
        console.log(digits)
        digit1 = digits[5]
        digit2 = digits[4]
        digit3 = digits[3]
        digit4 = digits[2]
        digit5 = digits[1]
        digit6 = digits[0]
    }


   
    return  (
        <div className="box container-fluid d-flex justify-content-center align-items-center ">
            <div className="icon bg-gradient bg-dark ">
            <i className="fas fa-clock"></i>
            </div>
            <div className="digit bg-gradient bg-dark"><h1>{digit6 || 0}</h1></div>
            <div className="digit bg-gradient bg-dark"><h1>{digit5 || 0}</h1></div>
            <div className="digit bg-gradient bg-dark"><h1>{digit4 || 0}</h1></div>
            <div className="digit bg-gradient bg-dark"><h1>{digit3 || 0}</h1></div>
            <div className="digit bg-gradient bg-dark"><h1>{digit2 || 0}</h1></div>
            <div className="digit bg-gradient bg-dark"><h1>{digit1 || 0}</h1></div>
        </div>
    )
}