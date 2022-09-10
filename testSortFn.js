function testSortFn(sortFn){
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

module.exports = { testSortFn }