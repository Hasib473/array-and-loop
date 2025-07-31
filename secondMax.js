let arr=[10,20,30,40,10,50];
let max=0;
let secondMax=0;

for(let i of arr){
    if(i>max){
        secondMax=max;
        max=i;
    
    }
}
console.log(secondMax);
console.log(max);