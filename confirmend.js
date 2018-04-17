function confirm(str,target){
    return str.substr(-target.length) === target;

}
console.log(confirm('this is the longest','longest'))