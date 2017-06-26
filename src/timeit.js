// timeit.js
//
// Helper to call run bechmarks asynchronously

async function time_it(fun, ...args) {
    return new Promise((resolve, reject) => {
            const tic = new Date();
    const res = fun(...args);
    const toc = new Date();
    resolve({"result": res, "elapsed": toc.getTime()-tic.getTime()});
});
}

async function time_it_async(fun, ...args) {
    const tic = new Date();
    const res = await fun(...args);
    const toc = new Date();
    return {"result": res, "elapsed": toc.getTime()-tic.getTime()};
}

exports.time_it = time_it;
exports.time_it_async = time_it_async;
