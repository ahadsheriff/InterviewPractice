
function factorialize(num) {

    var final = 1;

    for (var i = 1; i <= num; i++) {
        final *= i;
    }

    return console.log(final);
}

factorialize(5);
