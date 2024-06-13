multiplicationTable = function (size) {
    let table = [];

    for (let i = 0; i < size; i++) {
        table[i] = [];
        for (let j = 0; j < size; j++) {
            table[i].push((j + 1) * (i + 1));
        }
    }

    return table
}

console.log(multiplicationTable(4))