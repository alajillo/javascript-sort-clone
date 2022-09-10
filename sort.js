function testSort(sortFn){
    const testCase = new Array(100).fill(0).map(()=> parseInt(Math.random() * 100));
    const expected1 = [...testCase].sort((a,b)=> a - b);
    const result1 = sortFn(testCase,(a,b) => a - b);
    const expected2 = [...testCase].sort((a,b)=> b - a);
    const result2 = sortFn(testCase,(a,b) => b - a);
    try{
        expected1.forEach((number,index)=> {
            if(number !== result1[index]) throw new Error('result1 is fail')
        })
        expected2.forEach((number,index)=> {
            if(number !== result2[index]) throw new Error('result2 is fail')
        })
        console.log('test is passed')
    }catch(e){
        console.log(e)
    }    
}
function insertSort(array,fn){
    const newArray = [...array];
    for(let i = 0; i < newArray.length; i++){
        if(i > newArray.length - 1) return;
        let j = i;
        while(fn(newArray[j],newArray[j + 1]) > 0){
            swap(newArray, j, j + 1);
            j--
        }
    }
    return newArray;
}

function swap(array,index1,index2){
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

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

function timSort(array,fn){
    const half = array.length / 2;

    if(array.length <= 34){
        return insertSort(array,fn);
    }
    const left = array.splice(0,half);
    const right = array;
    return merge(timSort(left,fn),timSort(right,fn),fn)
}

testSort(timSort)


const testCase = new Array(10000).fill(0).map(()=> parseInt(Math.random() * 100));

const compareFn = (a,b) => b - a

const t0 = performance.now()
const test1 = [...testCase].sort(compareFn)
const t1 = performance.now()
console.log('built in sort function time : ',t1 - t0)

const t2 = performance.now()
const test2 = insertSort([...testCase],compareFn)
const t3 = performance.now()
console.log('insert sort function time : ',t3 - t2)

const t4 = performance.now()
const test3 = mergeSort([...testCase],compareFn)
const t5 = performance.now()
console.log('merge sort function time : ',t5 - t4)

const t6 = performance.now()
const test4 = timSort([...testCase],compareFn)
const t7 = performance.now()
console.log('tim sort function time : ',t7 - t6)