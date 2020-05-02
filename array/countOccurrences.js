function countOccurrences(arrs, val, key) {
    let count = 0;
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[key] === val) {
            count++;
        }
    }
    return count;
}