function differenceBy(firstArrs, secondArrs, condition) {
    let secondArrsWithCond = new Set();
    for (let i = 0; i < secondArrs.length; i++) {
        secondArrsWithCond.add(condition(secondArrs[i]));
    }
    return firstArrs.filter(firstVal => secondArrsWithCond.has(condition(firstVal)));
}