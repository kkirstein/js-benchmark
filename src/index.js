// Some (micro-)benchmarks for the JavaScript (node) programming language

import _ from 'lodash';
import {fib_naive, fib} from "./fib.js";
import t from "./timeit.js";

function main() {
    "use strict";

    // collect output
    let output = [];

    // start message
    output.push("JavaScript benchmarks");
    output.push("=====================");

    // run Fibonacci benchmarks
    output.push("Fibonacci numbers:");
    output.push("------------------");
    const tic = new Date();
    const fib_1 = fib_naive(35);
    fib_1.then(res => {
        const toc = new Date();
        output.push(_.join(["fib_naive(35) = ", res, "\tElapsed: ", toc.getTime()-tic.getTime(), "ms."], ""));
    });

    /*
    const res_1 = await t.time_it_async(fib_naive, 35);
    output.push(_.join(["fib_naive(35) = ", res_1.result, "\tElapsed: ", res_1.elapsed, "ms."], ""));
    */


    // run perfect numbers benchmarks
    output.push("Perfect numbers:");
    output.push("----------------");


    // run Mandelbrot benchmark
    output.push("Mandelbrot set:");
    output.push("---------------");


    // add output to DOM
    let element = document.createElement('div');
    Promise.all([fib_1]).then(values => {
        element.innerHTML = _.join(output, '<br>');
        document.body.appendChild(element);
    });

    return element;
}

main();
//document.body.appendChild(main());