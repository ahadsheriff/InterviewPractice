function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
    var reverse = "";
    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str == reverse) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
    
}

palindrome("eye");