class ReverseSubstrings {
    constructor() {
    }


    reverseBetweenParens(stringToReverse: string): string {

        const toReverse = [...stringToReverse];
        let characterStack: string[] = [];
        let characterAccumulator: string[] = []
        let result = []
        toReverse.map((char)=>{

            if(')' !== char){
                characterStack.push(char)
            }
        })

        //(ed(abc
        //queue:  cba
        //result: cba
        while(characterStack.length !== 0){
            // console.log(characterStack.pop());
            console.log(characterStack.length);
            // characterStack.shift()//removes first element from the array
            const currentChar = characterStack.pop();//removes last element from the array
            if('(' !== currentChar){
                characterAccumulator.push(currentChar);
            } else {
                while(characterAccumulator.length !== 0){
                    result.push(characterAccumulator.shift())
                }
            }



        }

        return result.join('');

    }

    reverseParentheses (s: string) {
        const stack = [];
        for (let char of s) {
            if (char !== ")") {
                stack.push(char);
                continue;
            }
            let c = stack.pop();
            let queue = [];
            while (c !== "(") {
                queue.push(c);
                c = stack.pop();
            }
            while (queue.length) {
                stack.push(queue.shift());
            }
        }
        return stack.join("");
    };
}

export default ReverseSubstrings;