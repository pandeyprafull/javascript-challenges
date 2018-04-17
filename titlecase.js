var cap = (str) =>{
    var name = str.split(' ').map(c =>  c[0].toUpperCase()  +  c.substring(1).toLowerCase());




return name.join(' ');

}
console.log(cap('this is the gajendra'))