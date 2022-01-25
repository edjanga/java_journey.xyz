// Script - Answers to chapter 2 questions

// 1. Looping triangle
function exercise1(){
  let counter = 1;
  let hashtag = '#';
  console.log(hashtag);
  while(counter<7){
    hashtag = hashtag+'#';
    console.log(hashtag);
    counter++;
  };
}
// 2. FizzBuzz
function exercise2(){
  for(let i = 1;i<101;i++){
    if((i%3==0)&&(i%5!=0)){
      console.log('Fizz');
    }
    else if((i%3!=0)&&(i%5==0)){
      console.log('Buzz');
    }
    else if ((i%3==0)&&(i%5==0)) {
      console.log('FizzBuzz');
    }
    else console.log(i);
  };
}
// 3. Chessboard
function exercise3(size=8){
  let counter = 0;
  function evenRow(size){
    let string = '';
    for(let i=0;i<size;i++){
      if(i%2==0){
        string = string+' ';
      }else{
        string = string+'#';
      }
    }
    console.log(string);
  };
  function oddRow(size){
    let string = '';
    for(let i=0;i<size;i++){
      if(i%2==0){
        string = string+'#';
      }else{
        string = string+' ';
      }
    }
    console.log(string);
  };
  while(counter<size){
    if(counter%2==0){
      evenRow(size);
    }else{
      oddRow(size);
    };
    counter += 1;
  }
}
exercise1();
exercise2();
exercise3();
