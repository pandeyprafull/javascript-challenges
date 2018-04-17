
var longest = 0;
var letter = (str) => {
    var name = str.split(' ');
    var newName =  name.map((val) =>{
        return val.length>longest 
        ? longest = val.length 
        : longest
    }) 
    return longest;

}
console.log(letter('this is the longest '))