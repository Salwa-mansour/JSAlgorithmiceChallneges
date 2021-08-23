function multiTable(number) {
    // good luck
    let str='';
    for(i=1;i<=10;i++){
        // console.log(i)
        if(i==10)
      str+=i +' * '+ number+' = '+ i*number 
      
      else str+=i +' * '+ number+' = '+ i*number + '\n'
    }
    return str;
  }
  // console.log(multiTable(2));
  function mouthSize(animal) {
    // code here
   return animal.toLowerCase() === 'alligator' ? 'small':'wide'
  }
 
  // function mouthSize(animal) {
  //   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  // }
  //  console.log(mouthSize("alligator"))
  function digitize(n) {
    //code here
    // let str ='';
    // let arr=n.split('').reverse()
   
  // console.log(arr.reduce((accumulator, str) => accumulator + str))
  //  return n.split('').reverse()
  // method creates a new Array instance from an array-like or iterabl
  // e object, the string '12345' is an iterable object, so it will create an Array from it.
//  return Array.from(String(n)).reverse();
//  let arr2=Array();
//  if(n%10>0){
//  n=n%10

//  arr2.push(n%10)}//forgot about while
//  return arr2
if(n > 0)
   return Array.from(String(n)).reverse().map(Number);
  }

