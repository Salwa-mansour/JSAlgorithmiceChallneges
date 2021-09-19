
function getSum( a,b )
{
  let sum=100; 
  console.log(a , b)
  sumGreater= function(a,b){for(let i=0 ;i>=b ;i--){sum+=a+1;console.log('a'+sum);} /* return sum;??*/}
  sumLess = function(a,b){for(let i=0 ; i>=b;b++) {sum+=a+1 ;console.log('b'+sum);}  ;return sum;}
   //Good luck!
  return  a == b ? console.log('bo'+b) :
          a > b ?  sumLess(a,b): sumGreater(a,b) 
        
       
}
// console.log(getSum(20,1))
function getMeSum(a,b){
  // test if  a-b is result of any state and use the reslut to commit the itranting times -abs()-
  let sum=0;
  let i = 0;
  // if(a<b){
  //   i=0;
  //   while(i<=(b-a)){
  //     sum+=a+i
  //     console.log(sum)
  //     i++;
  //   }
  // }
  // return sum;
  const counter = b-a;
  if(counter == 0){
    return a;
  }else if(counter < 0 ){
    //backword
    while(i <= Math.abs(counter)){
      sum+=a-i;
      i++;
    }
  }else{
    //forword // counter >0
    while( i <= counter){
      sum+=a+i;//can be repalced by a++
      i++;
    }
  }
  return sum;
}
// console.log('the sum is : '+getMeSum(1,3));
let arr = ['a','b','b','j']
function highAndLow(numbers){
  // ...
  arr=numbers.split(' ')
 
 return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
// console.log(highAndLow("1 2 3 4 5"));
const intDiff = (arr, n) => {
  // your code goes here
  let counter=0;

   for(let k=0;k<arr.length;k++){
      console.log(arr[k]+" auter*******")
        let i=0
      while(i<arr.length){
        console.log(i+' inner')
        if(n!==0){
            if(Math.abs(arr[i]-arr[k])===n) {
              // console.log(arr[i]+" "+arr[k])
          counter++;    }
          }else{
            if(arr[i]==arr[k] && k!=i){
              counter++
             
            }
            
          }
      i++;
      }
    }
 
   return counter/2;
}
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 0))
// console.log(intDiff([1, 1, 3, 3], 0))
function lastSurvivor(letters, coords) {
  let lastChar= letters.split('');
  let noDuplicateCoords = [...new Set(coords)];
for(let i=0;i<noDuplicateCoords.length;i++){
  console.log(letters.split(""))
  // [1,2,3,4].splice(0,0,)
lastChar.splice(noDuplicateCoords[i],1,"");
console.log(lastChar
  )

  }
return String(lastChar.filter(e=>e));
}
// console.log(lastSurvivor('abc', [1,1]))
// console.log(''==='')
console.log(['4','7','2','71','30'].sort())