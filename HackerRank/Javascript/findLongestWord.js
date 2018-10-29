function findLongestWord(str) {
    var res = str.split(" ");    
    
    var nums = [];

    for (i = 0; i < res.length; i++) {
        nums[i] = res[i].length;
        nums.reverse().sort(function(a,b) {
            return b-a;
        });
    }
    
    return nums[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");