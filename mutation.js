var still = (arr) => {
    var first = arr[0].toLowerCase().split('')
  var last  = arr[1].toLowerCase().split('')
   for(var i = 0; i<first.length; i++)
   {
   return   first.indexOf(last[i]) === -1 ? " false" : "true"
}

}
console.log(still(['landline','name']))

// const arr = [1,2,3,4,5];
// const name = arr.indexOf(7);
// console.log(name)sssss