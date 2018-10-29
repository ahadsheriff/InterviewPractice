/*  createAdder(baseNumber)
        return add(numberToAdd) {
            add up base number and number to add
        }
*/

function createAdder(baseNumber) {
    return function (numberToAdd) {
       return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2));