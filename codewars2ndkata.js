
 let str='';
    let k= 0;
// function accum(s){
//   console.log (s.length)
//     for(let i=0;i<s.length;i++){
//         do{
//           str+=s[i]
//            console.log(str)
//         }
//         while( k < i) 
//         console.log(k)
//             k++;
        
//     }
// }
// function accum(s){
//   console.log (s.length)
//     for(let i=0;i<s.length;i++){

//     }
// }
// console.log(accum("ad"))
// function star(s){
//     for(let i= 0 ;i<s.length;i++){
//         for (let k=0;k<i;k++){
//             console.log(s[i])
//             console.log(i)
   
//         }
//             console.log('-')
//     }
// }
// star('gh')
// let str='';
function tryangel(s){
        for(let i=0;i<s.length;i++){
            for(let k=0 ; k<=i;k++){
                // console.log(k)
                if(k==0){
                   // str+=k
                    str+=s.charAt(i).toUpperCase()
                }else{
                    //str+=k
                     str+=s.charAt(i);}
               
            }
            if(i!=s.length-1)
            str+='-';
        }
        str='"'+str +'"';
        return str;
}
console.log(tryangel('ZpglnRxqenU')
)