// Some (micro-)benchmarks for the JavaScript (node) programming language

import _ from 'lodash';
import {fib_naive, fib} from "./fib.js";
import t from "./timeit.js";

function main() {
    "use strict";

    // collect output
    let output = [];

    // add output to DOM
    let element = document.createElement('div');

    // start message
    output.push("JavaScript benchmarks");
    output.push("=====================");

    // run Fibonacci benchmarks
    let fib_header = document.createElement("h2");
    fib_header.innerHTML = "Fibonacci numbers:";
    element.appendChild(fib_header);
    const tic = new Date();
    const fib_1 = fib_naive(35);
    fib_1.then(res => {
        const toc = new Date();
        element.appendChild(document.createTextNode(_.join(["fib_naive(35) = ", res, "\tElapsed: ", toc.getTime()-tic.getTime(), "ms."], "")));

        // run perfect numbers benchmarks
        let pn_header = document.createElement("h2");
        pn_header.innerHTML = "Perfect numbers:";
        element.appendChild(pn_header);


        // run Mandelbrot benchmark
        let mandel_header = document.createElement("h2");
        mandel_header.innerHTML = "Mandelbrot set:";
        element.appendChild(mandel_header);

    });

    /*
    const res_1 = await t.time_it_async(fib_naive, 35);
    output.push(_.join(["fib_naive(35) = ", res_1.result, "\tElapsed: ", res_1.elapsed, "ms."], ""));
    */


    // add output to DOM
    Promise.all([fib_1]).then(values => {
        //element.innerHTML = _.join(output, '<br>');
        document.body.appendChild(element);
    });

    return element;
}

main();
//document.body.appendChild(main());