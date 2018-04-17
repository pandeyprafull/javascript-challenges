var emp = [
   { salary : 257},
{salary : 24},
{salary : 34},
{salary : 36}

];

var result = emp.reduce(function(sum,emp){
    console.log('hello',sum,emp.salary)
    return sum+emp.salary},0);
console.log(result)