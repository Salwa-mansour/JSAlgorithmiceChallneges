function tryangel(s){
    let str='';
    let k= 0;
        for(let i=0;i<s.length;i++){
            for(let k=0 ; k<=i;k++){
                // console.log(k)
                if(k !== 0){
                //    str+=k
                     str+=s.charAt(i).toLowerCase();
                }else{
                    // str+=k
                     str+=s.charAt(i).toUpperCase()
                   }  
            }
            if(i!=s.length-1)
            str+='-';
        }
        str='"'+str +'"';
        return str;
}
// console.log(tryangel('HbideVbxncC'))

function fakeBin(x){
  return  x.split('').map(x=> x<5 ? x=0:x=1).join('');
    }

    // console.log(fakeBin('6320990'));
  function  findSmallestInt(args) {
      smallest=  args.reduce((x,y)=>x<y?x:y)
        return smallest;
       
        // .Number();
   }
  //  console.log(findSmallestInt([45,454,-4,4]));
  function isIsogram(str){
    //...
  //   (...str).toLowerCase();
  let empty=(str==/{\s}/g);
    if(empty){
      return 'empty string : '+ empty;
    }else{
      return 'is insogram : '+str.split('').reduce((x,y)=> x==y);
    }
  }
  console.log(isIsogram('   '));