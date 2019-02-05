/*
*First Try: 29:43
* Second Try: 18:32
*/
const testList = [1,2,3,4,5];

function sumFor(list){
  let total=0;
  for(let i=0; i<list.length; i++){
    total+=list[i];
  }
  return total;
}
console.log(sumFor(testList));
function sumWhile(list){
  let total =0;
  let i=0;
  while(i<list.length){
    total+=list[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testList));
function sumRecursion(list){
  if(list.length===0){
    return 0;
  }
  return list[0]+sumRecursion(list.slice(1, list.length));
}
console.log(sumRecursion(testList));
function sumTheEasyWay(list){
  return _.reduce(list, (total, num)=>{ return total+num;});
}
console.log(sumTheEasyWay(testList));