const { testSortFn } = require('./testSortFn.js')
const { insertSort } = require('./insertSort.js')
const { mergeSort } = require('./mergeSort.js')
const { timSort } = require('./timSort.js')

testSortFn(insertSort)

testSortFn(mergeSort)

testSortFn(timSort)


// compare performance
const testCase = new Array(10000).fill(0).map(()=> parseInt(Math.random() * 100));

const compareFn = (a,b) => b - a

const t0 = performance.now()
const newTestCase = [...testCase].sort(compareFn)
const t1 = performance.now()
console.log('built in sort function time : ',t1 - t0)

const t2 = performance.now()
insertSort([...testCase],compareFn)
const t3 = performance.now()
console.log('insert sort function time : ',t3 - t2)

const t4 = performance.now()
mergeSort([...testCase],compareFn)
const t5 = performance.now()
console.log('merge sort function time : ',t5 - t4)

const t6 = performance.now()
timSort([...testCase],compareFn)
const t7 = performance.now()
console.log('tim sort function time : ',t7 - t6)