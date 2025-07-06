function sumArray(arr, int) {
    const pairs = [];
    const used = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (used.has(i)) continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (used.has(j)) continue;
            if (arr[i] + arr[j] === int) {
                pairs.push([arr[i], arr[j]]);
                used.add(i);
                used.add(j);
                break;
            }
        }
    }
    return pairs;
}

//test case
console.log(sumArray([2,1,4,3], 5));
console.log(sumArray([1,8,10,3], 11));
console.log(sumArray([1,-1,2,-2,3,-3], 0));
console.log(sumArray([1,1,1,2], 1));
console.log(sumArray([1,2,3,4,5],10));

