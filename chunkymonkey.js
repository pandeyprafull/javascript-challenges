function chunk(arr, size) {
    var group = [];
    var position = 0;

    while(position < arr.length) {
      group.push(arr.slice(position, position+=size));

    }
    return group;

  }
  console.log(chunk([1,2,3,4,5,6],2))
