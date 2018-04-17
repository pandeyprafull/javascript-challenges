var bouncer = (arr) => {
    return arr.filter(Boolean)
        // return (a!==''&& a!=='false' && a!=='undefined'&& a!=="null"&& a!==0 && a!==a.isNaN('NaN'))


}

console.log(bouncer([1,false,undefined,2,3,4,5,0,546,NaN]))