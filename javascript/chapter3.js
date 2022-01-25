// Script - Answers to chapter 2 questions

// 1. Self-made minimum function

function exercise1(x,y){
 if(x<y){
   return x;
 } else {
   return y;
 }
}
function exercise2(x){
  if(x==0){
    return true;
  }
  else if(x==1){
    return false;
  }
  else{
    return exercise2(x-2);
  };
}
function exercise3(string,target){
  let counter = 0;
  for(let i=0;i<string.length;i++){
    if(string[i]==target) counter += 1;
  }
  return counter;
}
console.log(exercise2(5));
console.log(exercise1(4,3));
console.log(exercise3('Indeed','e'));
