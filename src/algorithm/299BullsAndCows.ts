
//Leetcode problem 299: https://leetcode.com/problems/bulls-and-cows/
// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
//
//     The number of "bulls", which are digits in the guess that are in the correct position.
//     The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
//
// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
//
// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.
class BullsAndCows {

    //TODO finish implementation.
    constructor() {
    }

    public getHint(secret: string, guess: string): string{

        const secretMap:Map<string, any> = new Map();
        const guessMap:Map<string, any> = new Map();
        let cows: number = 0;
        let bulls: number = 0;

        for(let i = 0; i < secret.length; i++){
            const key = secret.charAt(i);

            if(secretMap.has(key)){
                const positions = secretMap.get(key);
                positions.push(i);
            } else{
                secretMap.set(key,[i]);
            }

        }

        console.log(secretMap);

        for(let i = 0; i < guess.length; i++){
            const key = guess.charAt(i);

            if(guessMap.has(key)){
                const positions = guessMap.get(key);
                positions.push(i);
            } else{
                guessMap.set(key,[i]);
            }

        }

        console.log(guessMap);

        for(let i = 0; i < secret.length; i++){
            const key = secret.charAt(i);
            if(secretMap.has(key) && guessMap.has(key)){
                
            }
        }
        // for(let i = 0; i < secret.length; i++){
        //     const key = guess.charAt(i);
        //
        //     //if it has the key
        //     //grab the list and do a linear search
        //     //if the current number matches the position then add it to the Bulls (B)
        //     //if the current number does not match the position, but it was found in the dictionary, add to Cows(A)
        //
        //     if(sgMap.has(key)){
        //
        //         let isBullFound = false;
        //         const positions = sgMap.get(key);
        //         if(positions.length===0){
        //             continue;
        //         }
        //
        //         cows++;
        //
        //         for(let j = 0; j < positions.length; j++){
        //             if(positions[j] === i){
        //                 bulls++;
        //                 cows--;
        //                 positions.splice(j,1);
        //                 isBullFound = true;
        //                 break;
        //             }
        //         }
        //
        //         if(!isBullFound){
        //             if(positions[0] < i){
        //                 // console.log(positions);
        //                 positions.pop();
        //                 // console.log(positions);
        //             }
        //         }
        //
        //     }
        //
        // }

        //console.log(sgMap);

        return bulls + 'A' + cows + 'B';
    };
}

export default BullsAndCows;