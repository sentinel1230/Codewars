function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] % 2 != 0 && arr[j] % 2 != 0 && arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))