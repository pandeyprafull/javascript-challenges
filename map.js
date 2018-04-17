let arr = [1,2,3,4,5,6,7,8];
let arr2 = arr.map((v,i,arr) =>{
    return v%2==0? v*2 : v;

});
console.log(arr2)