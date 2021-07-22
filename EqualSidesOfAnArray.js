// Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array 
// and find an index N where the sum of the integers to the left of N is 
// equal to the sum of the integers to the right of N. If there is
//  no index that would make this happen, return -1.
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// function findEvenIndex(arr){
//     let rSum=0;
//     let lSum=0;
//     let indexarr=-1;
//     let rlength = arr.length-1;
//     for(let i=0;i<rlength;i++){
//         lSum+=arr[i];
//         console.log('the outer sum is -------------------',lSum)
//         for(let k=rlength;k>=0;k--){
//             rSum+=arr[k];
//             // console.log(lSum)
//             console.log(k)
//             console.log('the innner sum is',rSum)
//             if(lSum==rSum){
                

//              indexarr =i+1;
//             }
//         }
//         rSum=0;
        
//     }
//     return indexarr;
// }
function findEvenIndex(arr){
    let leftSum=0;
    let rightSum=0;
  for(let i=0;i<arr.length;i++){
      for(let k=i+1;k<arr.length;k++){
          leftSum+=arr[k]
     
      }
            for(let y=(i-1);y>0;y--){
            rightSum+=arr[y];
      }

      if(leftSum==rightSum){
          return i;
      }
     
  }
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
