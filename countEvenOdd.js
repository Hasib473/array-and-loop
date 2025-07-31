let array=[1,3,2,4,6,7,9,11,15];
let countOdd=0;
let countEven=0;
for(let i of array){
    countOdd= i%2!==0 ? countOdd+1 : countOdd;
    countEven= i%2===0 ? countEven+1 : countEven;
}
console.log("Totol off number in this array is :",countOdd);
console.log("Total even number in this array is :",countEven);