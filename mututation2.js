// var check = (arr) => {
//     return arr[1].toLowerCase().split('').every(word => arr[0].toLowerCase().split('').indexOf(word) !== -1 )
// }
// console.log(check(['landline','name']))


var check = (arr) => {
        var last = arr[1].toLowerCase().split('');
        var first = arr[0].toLowerCase().split('');

        return last.every(function(word){

        return first.indexOf(word)!==-1;
    })
}
console.log(check(['normalize','mazy']))