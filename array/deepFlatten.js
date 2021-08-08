function deepFlatten(arrs, result = [], depth = 1) {
    for (let i = 0; i < arrs.length; i++) {
        if (Array.isArray(arrs[i]) && depth > 0) {
            deepFlatten(arrs[i], result, depth - 1);
        } else {
            result.push(arrs[i]);
        }
    }
    return result;
}