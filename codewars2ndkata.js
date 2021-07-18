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
                    str+=k
                     str+=s.charAt(i).toUpperCase()
                   }  
            }
            if(i!=s.length-1)
            str+='-';
        }
        str='"'+str +'"';
        return str;
}
console.log(tryangel('HbideVbxncC')
)