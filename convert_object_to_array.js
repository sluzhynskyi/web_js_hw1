function toArr(obj){
    let arr = []

    for (let i = 0; i < Object.keys(obj).length; i++) {
        arr.push([Object.keys(obj)[i], Object.values(obj)[i]]);
    }
    return arr;
}
//console.log(toArr({ key1: 'value1', key2: 'value2' }));
//console.log(toArr({}))