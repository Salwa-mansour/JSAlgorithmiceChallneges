
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
console.log('the sum is : '+getMeSum(1,3));
let arr = ['a','b','b','j']
