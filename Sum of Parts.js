function partsSums(ls) {
    let newLs = [0];
    let sum = 0;

    for (let i = ls.length - 1; i >= 0; i--) {
        sum += ls[i];
        newLs.push(sum);
    }
    return newLs.reverse();
}

console.log(partsSums([0, 1, 3, 6, 10]))