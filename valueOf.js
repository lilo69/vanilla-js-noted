const obj = {
  i: 1,
  valueOf: function () {
    if (this.i === 1) {
      this.i++;
      return 1;
    } else {
      return 2;
    }
  },
};
if (obj == 1 && obj == 2) {
  console.log(obj);
}
