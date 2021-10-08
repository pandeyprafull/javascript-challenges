let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sortAndCount(n, arr) {
    let sorted = arr.sort((a, b) => a - b);
    let pairs = 0;
    console.log(sorted)
    for (let i = 0; i < n - 1; i++) {
        console.log(i)
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
        console.log(i)
        console.log(pairs)
    }

    return pairs;
}

console.log(sortAndCount(arr.length, arr))