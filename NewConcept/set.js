let arr = [1, 2, 3, 4];
let arr2 = [2, 3, 4];
let setObj = new Set(arr);

setObj.add(arr2);
setObj.forEach((el) => {
  if (Array.isArray(el)) {
    el.forEach((element) => {
      console.log(element);
    });
  }
});
console.log(setObj);
