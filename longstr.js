var longest = (str) =>{
    var x = Math.max(...str.split(' ').map(c => c.length))
    return x;
}
console.log(longest('this is the longest string in the string'))