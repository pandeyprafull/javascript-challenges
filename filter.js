const a = ['this','is','the','string','threesome'] ;
const b = a.filter(char => {
    return char.length>a.length
});
console.log(b)