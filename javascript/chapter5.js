// Script - Answers to chapter 5 questions
function flatten(nestedArray){
  let flattenedAray = nestedArray.reduce((a,b) => a.concat(b));
  return flattenedAray;
};
// Self made test to test own loop
function amountOfEven(x){
  if(x%2==0){
    return true;
  }else{
    return false;
  }
}
function selfMadeSome(array,func){
let counter = 0;
  for(let i in array){
    if(func(array[i])){
      counter += 1
    }
    else{
      //pass
    }
  }
  return counter
}
let nestedArray = [[1,2,3,4],[5,6,8,7]];
console.log(flatten(nestedArray));
let testArray = [2,4,7,8];
console.log(selfMadeSome(testArray,amountOfEven));
