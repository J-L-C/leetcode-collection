class PalindromeNumber {

    public isPalindrome(num: number): boolean{
        let numAsString: String = String(num);
        let leftPointer = 0;
        let rightPointer = numAsString.length - 1;

        //with out sorting, I should be able to loop over the string;
        while(leftPointer < rightPointer){
            if(numAsString[leftPointer] != numAsString[rightPointer]){
                return false;
            }
            leftPointer++;
            rightPointer--;
        }


        return true;
    }
}

export default PalindromeNumber;