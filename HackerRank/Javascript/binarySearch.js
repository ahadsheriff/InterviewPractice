var a = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

a.sort(function (a, b) {
    return a - b;
});

console.log('a,', a);

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } 
    else if (arr[mid] < i && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } 
    else if (arr[mid] > i && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), i);
    } 
    else {
        console.log('not here', i);
        return -1;
    }

}

var result = binarySearch(a, 4);
console.log(result);
