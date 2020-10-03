function bubbleSort(arr) {
    let temp;
    let isSorted = false;
    let step = 0;

    let lastUnsorted = arr.length - 1;
    while (!isSorted) {
        isSorted = true;
        // console.log(lastUnsorted)
        // console.log(arr)
        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = temp;
                isSorted = false;
                step++;
            }
            // step++
            // console.log(arr)
        }
        // step++;
        lastUnsorted--;
    }
    return {arr, step};

}


console.log(bubbleSort([6,4,1]))