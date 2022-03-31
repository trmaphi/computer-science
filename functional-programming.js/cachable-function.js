const sleep = (milliseconds) => {
    const end = Date.now() + milliseconds
    while (Date.now() < end) continue
}

// Run so slow
function longRunningFn(args) {
    sleep(3000)
    return `longRunningFn result ${args}`
}

const memoize = (f) => {
    const cache = {};

    return (...args) => {
        const argStr = JSON.stringify(args);
        cache[argStr] = cache[argStr] || f(...args);
        return cache[argStr]; Å
    };
};

const memoizedlongRunningFn = memoize(longRunningFn);

console.log(memoizedlongRunningFn("abc"))
console.log(memoizedlongRunningFn("abc"))

// console.log(longRunningFn("abc"))
// console.log(longRunningFn("abc"))