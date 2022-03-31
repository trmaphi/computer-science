const pureFn = (arr) => {return arr[0]};
const arr = [2,3,4];
console.log(pureFn(arr));

const impureFn = function(arr) {
    arr.forEach((element, index) => {
        arr[index] = element + 1;
    })

    return arr;
}

console.log(arr);
console.log(impureFn(arr));
console.log(arr);

