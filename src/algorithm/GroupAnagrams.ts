class GroupAnagrams {

    constructor()
    {
    }

    group(listOfStrings: string[]): string[][] {
        let groups:{ [id:string] : string[] } = {}
        let result: any = [];

        for(let i = 0; i < listOfStrings.length; i++){
            let sorted = this.sortString(listOfStrings[i]);
            if(groups[sorted] === undefined){
                groups[sorted] = [listOfStrings[i]];
            } else {
                groups[sorted].push(listOfStrings[i])
            }
        }

        Object.values(groups).forEach(v=>{
            result.push(v);
        })

        return result;
    }

    sortString(sortMe: string): string {
        let split = sortMe.split("");
        let sorted = split.sort();
        return sorted.join('');
    }
}

export default GroupAnagrams;