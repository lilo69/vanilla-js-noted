function bifurcateBy(array, condition) {
    if (typeof array !== 'array') return new Error('Invalid array');
    if (typeof condition !== 'function') return new Error('Invalid function');
    let matchGroup = [];
    let notMatchGroup = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (condition(item)) {
            matchGroup.push(item);
        } else {
            notMatchGroup.push(item);
        }
    }
    return [matchGroup, notMatchGroup];
}