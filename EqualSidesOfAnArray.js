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
// function findEvenIndex(arr){
//     let leftSum=0;
//     let rightSum=0;
//   for(let i=0;i<arr.length;i++){
//       for(let k=i+1;k<arr.length;k++){
//           leftSum+=arr[k]
     
//       }
//             for(let y=(i-1);y>0;y--){
//             rightSum+=arr[y];
//       }

//       if(leftSum==rightSum){
//           return i;
//       }
     
//   }
// }
// function findEvenIndex(arr){
//     let Sum=arr.reduce((a, b) => a + b, 0);
//     let rightSum=0;
//     let leftSum=0;
//   for(let i=0;i<arr.length;i++){
//       //i need to loop this
//      leftSum+=Sum+arr[i-1]
//      rightSum+=Sum+[i+1]
//     }
// }
function findEvenIndex(arr){
    let i,k,y;
    
    let arrLength=arr.length-1;
    for(i=0;i<=arrLength;i++){
        let startSum=0;
        let endSum=0;
        for(k=0;k<i;k++){
            startSum+=arr[k];
            console.log('start sum',startSum)
        }
        for(y=arrLength;y>i;y--){
            endSum+=arr[y]
            console.log('end sum',endSum)
        }
        if(endSum==startSum){
            return i;
        }
    }
    return -1;
}
//yes Kata solved !
//can't submit the solution
//https://github.com/Codewars/codewars.com/issues/1411
// https://gitter.im/Codewars/codewars.com/kata-solving-help?at=5e015cf6260751301cfcac88
// console.log(findEvenIndex([1,100,50,-51,1,1]));
let str = ['hello']
str.pop()
console.log(str)
