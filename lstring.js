var result;
function max(str){
    var name = str.split(' ').map(function(a) {
        return a.length
    })

    return Math.max.apply(null,name);
}
console.log(max('this is the longest string'))