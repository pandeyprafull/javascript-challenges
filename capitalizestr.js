var capital = (str) => {
    var name = str.split(' ')
    var subsplit = name.map((val) => {
        return val.toUpperCase()
    })
    return subsplit.join(' ')
}
console.log(capital('this is the string'))