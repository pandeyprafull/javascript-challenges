function max(arr){
    return arr.map(function(a){
        return Math.max.apply(null,a);
    })

}
console.log(max([[1,2,3,45,],[3,5,6,7,8],[2,4,5,7,8,35,6]]))