class SubarraySum{
    constructor() {
    }

 public findAllOccurrencesOfSum(nums: number[], k: number){

     let totalOccurrences = 0;
     let prefixSum = 0;
     const sumFrequency: Map<any, any> = new Map();
     sumFrequency.set(0,1)
     nums.map((num:number)=>{
         prefixSum += num;
         const sumDifference = prefixSum - k;

         if(sumFrequency.has(sumDifference)){
             totalOccurrences += sumFrequency.get(sumDifference);
         }
         if(sumFrequency.has(prefixSum)){
             sumFrequency.set(prefixSum, sumFrequency.get(prefixSum)+1)
         } else {
             sumFrequency.set(prefixSum,1);
         }

     })
     return totalOccurrences;
    }
}

export default SubarraySum;