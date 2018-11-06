function reverseString(str) {
  var arr = [];
  var reversed = str;
  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr.reverse();

  var joinArray = arr.join("");

  return console.log(joinArray);

}

reverseString("hello");