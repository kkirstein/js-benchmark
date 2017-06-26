// Some (micro-)benchmarks for the JavaScript (node) programming language

import _ from 'lodash';
import {fib_naive, fib} from "./fib.js";

function main() {
    "use strict";

    // collect output
    let output = [];

    // start message
    output.push("JavaScript benchmarks");
    output.push("=====================");
    const tic = new Date();
    const res = fib_naive(35);
    const toc = new Date();
    output.push("fib_naive(35) = ", res.result, "\tElapsed: ", toc.getTime()-tic.getTime(), "ms.");


    // run Fibonacci benchmarks
    output.push("Fibonacci numbers:");
    output.push("------------------");


    // run perfect numbers benchmarks
    output.push("Perfect numbers:");
    output.push("----------------");


    // run Mandelbrot benchmark
    output.push("Mandelbrot set:");
    output.push("---------------");


    // add output to DOM
    let element = document.createElement('div');
    element.innerHTML = _.join(output, '<br>');

    return element;
}

document.body.appendChild(main());