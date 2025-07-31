let array=[100,30,4,56,77,89];
let result=array[0];

for(let i of array){
    result= i>result ? result=i: result;
}
console.log("The biggest number in array is :",result);
