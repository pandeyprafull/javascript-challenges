function pos(arr,num){
   arr.push(num);
    arr.sort(function(a,b){
        return a-b;
    })
    return arr.indexOf(num)
}
console.log(pos([1,2,3,5,67],7))