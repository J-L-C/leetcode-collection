class DivisibleByK{
    constructor() {
    }

    // public findAllSumsDivisibleBy(numbers: number[], divisor: number): number{
    //     let result: number = 0;
    //     let divisibleByMap: Map<any, any> = new Map();
    //     let sum = 0;
    //
    //     for(let i = 0; i< numbers.length; i++){
    //         if(numbers[i]%divisor == 0){
    //             console.log('hit');
    //             if(!divisibleByMap.has(sum))
    //                 divisibleByMap.set(sum,1);
    //             else
    //                 divisibleByMap.set(sum, divisibleByMap.get(sum) + 1)
    //         }
    //     }
    //
    //     for(let i = 0; i< numbers.length; i++){
    //         sum += numbers[i]
    //         console.log('current sum: '+sum)
    //         if(sum%divisor == 0){
    //             if(!divisibleByMap.has(sum))
    //                 divisibleByMap.set(sum,1);
    //             else
    //                 divisibleByMap.set(sum, divisibleByMap.get(sum) + 1)
    //         }
    //     }
    //
    //     for(let [key,value] of divisibleByMap){
    //         console.log('key '+key)
    //         console.log('value '+value)
    //         result += value;
    //     }
    //
    //     return result;
    // }

    public findAllSumsDivisibleBy(numbers: number[], divisor: number): number{
        let count: number = 0;
        let remainderFrequency: Map<any, any> = new Map();
        let prefixSum = 0;

        remainderFrequency.set(0,1);
        numbers.map((num: number)=>{
            prefixSum += num;
            const remainder: number = prefixSum % divisor;
            if(remainderFrequency.has(remainder)){
                count += remainderFrequency.get(remainder);
                let frequency = remainderFrequency.get(remainder);
                frequency++;
                remainderFrequency.set(remainder, frequency)
            } else {
                remainderFrequency.set(remainder,1);
            }
        })

        console.log(remainderFrequency)
        return count;
    }


}

export default DivisibleByK;