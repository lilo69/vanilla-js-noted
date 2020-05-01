function averageBy(array, condition) {
    let arrayLength = array.length;
    let averageValue = 0;
    for (let i = 0; i < arrayLength; i++) {
        let item = 0;
        if (!condition) {
            item = Number(array[i]);
        } else if (typeof condition === 'function') {
            item = Number(condition(array[i]));
        } else {
            item = Number(array[i][condition]);
        }
        if (isNaN(item)) return new Error('Invalid number');
        else {
            averageValue += item;
        }
    }
    return averageValue / arrayLength;
}