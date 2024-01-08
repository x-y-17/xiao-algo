const calcSum = (num) => {
    let sum = 0;
    while(num > 0){
        let temp = num % 10;
        num = Math.floor(num / 10);
        console.log(num,'--',temp);
        
    }
}
console.log(calcSum(12345));