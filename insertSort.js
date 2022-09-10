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


module.exports = { insertSort, swap }