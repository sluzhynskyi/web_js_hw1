function  avgWordLengthCalc(sentence){
    let sum = 0;
    sentence = sentence.split(" ");
    for(let i =0; i < sentence.length; i++){
        let wordLen = 0;
        for (let j = 0; j < sentence[i].length; j++){
            if(sentence[i][j].match(/^[A-Za-z]+$/)){
                wordLen += 1;
            }
        }
        sum += wordLen;
    }
    return Math.round((sum / sentence.length) * 100) / 100;
}
// console.log(avgWordLengthCalc("q w e r t y."));
// console.log(avgWordLengthCalc("The reduce method executes a reducer function.") );// 5.57
// console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
// console.log(avgWordLengthCalc("")); // 0