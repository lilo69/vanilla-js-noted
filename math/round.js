function round(number, decimals = 0) {
    let numberStr = Math.round(number + 'e' + decimals) + 'e-' + decimals;
    return Number(numberStr);
}
