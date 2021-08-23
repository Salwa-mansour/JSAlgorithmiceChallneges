function noSpace(x){
    var nospace = [] 
    // console.log('this is my array',nospace)
   let arr= x.split('');
   arr.forEach(element => {
     if(element != ' '){
  //  console.log(element)
      nospace.push(element);
      // console.log(noSpace)
     }

   });
   return nospace.join("");
    }
  // console.log(noSpace('dfsdfs         dfsd   dfsdfs'))
// noSpace()
// function well(x){
//   let goodOnes=0;
//      x.forEach(idea =>{
//        idea ==='true'
//        goodOnes++;
//        console.log(goodOnes)
//      })
//  return goodOnes > 2 ? 'I smell a series!' : goodOnes > 0 ? 'Publish!' : 'Fail!';
// }
function well(x){
  let goodOnes=0;

     x.forEach(idea =>{
       if(idea ==='good') 
        goodOnes++;
       console.log(goodOnes)
     })
 return goodOnes > 2 ? 'I smell a series!' : goodOnes > 0 ? 'Publish!' : 'Fail!';
}
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
