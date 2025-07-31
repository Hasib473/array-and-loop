let array=[10,34,65,7,34];
let result=[0];
for(let i of array){
    if(i>result){
        result=i;
    }
}
console.log("The large number is :",result);
