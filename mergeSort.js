function mergeSort(array,fn){
    const half = array.length / 2;

    if(array.length <= 1){
        return array;
    }
    const left = array.splice(0,half);
    const right = array;
    return merge(mergeSort(left,fn),mergeSort(right,fn),fn)
}

function merge(left, right, fn) {
    let sortedArr = [];
  
    while (left.length && right.length) {
      if (fn(left[0], right[0]) < 0) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
}

module.exports = { merge, mergeSort }