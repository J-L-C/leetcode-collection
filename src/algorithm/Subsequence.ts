class Subsequence
{

    constructor()
    {

    }

    isSubsequence(targetString: string, subString: string) {

        let subStringPointer = 0;

        if(subString.length == 0)
            return true;

        for(let i = 0; i < targetString.length; i++){
            if(targetString.charAt(i) == subString.charAt(subStringPointer)){
                subStringPointer++;
            }
        }

        return subStringPointer == subString.length;
    }
}

export default Subsequence;