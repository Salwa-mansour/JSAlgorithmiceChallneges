
// Implement a method that accepts 3 integer
//  values a, b, c. The method should return true
//  if a triangle can be built with the sides of
//  given length and false in any other case.

// (In this case, all triangles must have surface
//  greater than 0 to be accepted).
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle(a,b,c){
  
        let fierst =( a+b) > c;
        let second =( a+c) > b;
        let third =( b+c) > a;
        if(fierst && second && third){
            return true;
        }else return false
  
}
console.log(isTriangle(11,3,0));