function isType(type, val) {
    return val !== null && val !== undefined && val.constructor === type;
}