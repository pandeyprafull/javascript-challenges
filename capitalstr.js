var cap = (str) =>{
    var name = str.split(' ').map(c =>  c[0].toUpperCase()  + c.substring(1).toLowerCase());




return name;

}
console.log(cap('THIS IS THE LONGEST STR'))