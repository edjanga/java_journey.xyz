// Script - Answers to chapter 4 questions

function selfMadeRange(start,end,step){
  function exercise1_a(start,end,step){
    let array = [];
    if(step>0){
      for(let i=start;i<end;i=i+step){
        array.push(i);
      }
      return array;
    }else{
      for(let i=end;i>start;i=i+step){
        array.push(i);
      }
      return array;
    };
};
  function exercise1_b(array){
    let helper = 0;
    for(let i=0;i<array.length;i++){
      helper += array[i];
    }
    return helper;
};
  return exercise1_a(start,end,step);
}
function reverseArray(array){
  let array2 = [];
  for(let i=array.length-1;i>=0;i--){
    array2.push(array[i]);
  }
  return array2;
}
function reverseArrayInPlace(array){
  let size = array.length;
  for(let i=size-1;i>=0;i--){
    array.push(array[i]);
  }
  for(let i=0;i<size;i++){
    array.shift(array[i]);
  }
  console.log(array);
  return array;
}
function arrayToList(array){
  let temp = {};
  for(let i=array.length-1;i>=0;i--){
    if(i==array.length-1){
      temp = {'value':array[i],'rest':null};
    }else {
      temp = {'value':array[i],'rest':temp};
    }
  }
  return temp;
}
function listToArray(list){
  let array = [];
  let temp = list;
  while(temp!=null){
    array.push(temp['value']);
    temp = temp['rest'];
  }
  return array;
}
function prepend(x,list) {
  return {'value':x,'rest':list};
}
function nth(x,i,list){
  i = i-1;
  let array = listToArray(list);
  if(i<array.length-1){
    array.splice(i,0,x);
    let newList = arrayToList(array);
    return newList;
  }else{
    console.log('Array is too small');
    return undefined;
  }
}


// Output to console
console.log(selfMadeRange(1,6,-2));
console.log(reverseArray([1,6,-2]));
console.log(reverseArrayInPlace([1,6,-2]));
let array = [1,2,3,5,4];
console.log(arrayToList(array));
let list = arrayToList(array);
console.log(listToArray(list));
let list2 = prepend(4,list);
console.log(list2);
let list3 = nth(23,2,list);
console.log(list3);
