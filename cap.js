var cap =(str) =>{
    var name = str.split(' ').map(c => c.substring().toUpperCase());
    return name.join(' ');

}
console.log(cap('this is the pen '))