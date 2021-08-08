function toSingleDimensionalArray(arr) {
  return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
}
