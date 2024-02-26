class ContainsDuplicate {


    doesContainDuplicates(numbers: number[]): boolean{

        const map = new Map();
        let isDuplicate = false;

        if(numbers.length <= 1)
            return isDuplicate;

        numbers.map((number)=>{
                if(map.has(number)){
                    isDuplicate = true;
                }
                map.set(number,number);
        })

        return isDuplicate;
    }
}


export default ContainsDuplicate