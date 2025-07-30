let sum=0;
for (let i=0; i<=20; i+=1){
    if(i%2==0){
        console.log(i);
        sum+=i;
    }
}
console.log("The sum of even number:",sum);