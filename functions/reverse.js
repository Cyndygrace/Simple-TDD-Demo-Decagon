function reverse(arr){
    reversed = [];
    for (var i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed;
}

module.exports = reverse;