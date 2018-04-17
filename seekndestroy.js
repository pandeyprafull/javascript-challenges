function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    function filteredArr(arr) {
      return args.indexOf(arr) === -1;
    }
    return arr.filter(filteredArr);
  }
  console.log(destroyer([1,2,3,4,5],4,))