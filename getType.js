function getType(value) {
    return value === undefined ? 'undefined' : value === null ? 'null' : value.constructor.name.toLowerCase();
}