let arr=[10,20,30,40,10,50];
let max=0;
let secondMax=0;

for(let i of arr){
     (i>max) ?
       ( secondMax=max,
        max=i):
        "Null";
    
    }

console.log(secondMax);
console.log(max);