function sum (array, accu = 0) {
    if (array.length === 0) return accu;
    [current, ...rest] = array;
    accu += current;
    return sum(rest, accu);
}

const mySum = sum([1,2,3,4,5,6]);
console.log(mySum); // 21
