const { insertSort } = require('./insertSort.js')
const { merge } = require('./mergeSort.js')

function timSort(array,fn){
    const half = array.length / 2;

    if(array.length <= 34){
        return insertSort(array,fn);
    }
    const left = array.splice(0,half);
    const right = array;
    return merge(timSort(left,fn),timSort(right,fn),fn)
}

module.exports = { timSort }