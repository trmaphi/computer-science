const firstClassFn = function (str) {
    console.log(str);
}

firstClassFn("Ha Vi");
console.log(typeof firstClassFn)
console.log(firstClassFn instanceof Object)

// Use synchronous callback
const useCallBackFn = function (callBackFn) {
    callBackFn();
}

useCallBackFn(function () {
    console.log("Ha vi in callback")
})

// Use asynchronous callback
const useAsyncFn = function (asyncFn) {
    console.log("Ha vi call immediately")
    setTimeout(asyncFn, 2000)
}

useAsyncFn(function () {
    console.log("Ha vi call after 2s")
})

// 
const isTrue = function (value, callback) {
    if (value === true) {
        callback(null, "Value was true.");
    }
    else {
        callback(new Error("Value is not true!"));
    }
}

const callback = function (error, retval) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(retval);
}

// Note: when calling the same asynchronous function twice like this, you are in a race condition.
// You have no way of knowing for certain which callback will be called first when calling the functions in this manner.

isTrue(false, callback);
isTrue(true, callback);