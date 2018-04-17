var longest = 0;
function findLongestWord(str){
    var name = str.split(' ');
    var newName =  name.map(function(val){
    return val.length>longest ?
          
    longest = val.length 
    : longest;
      
    }) ;
  
    return longest;

}
console.log(findLongestWord('May the force be with you'));
