var vowels: string[] = ['a','e','i','o','u'];
var alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var integers: string[] = ['0','1','2','3','4','5','6','7','8','9'];

export const isEquivalent = (input:string) => {

    let newString: string = input.toLowerCase();

    if(integers.includes(input)){
        return input;
    } else {

        let index: number = alphabet.indexOf(newString);
        let next: string ="";
        
        if(index == (alphabet.length - 1) ){
            next = "a";
        } else next = alphabet[index + 1];

        if(vowels.includes(next)){
            return next.toUpperCase();
        } return next;
    }

}

function changeItUp(input: string){

    let length : number = input.length;
    let newString: string ="";

    for(let i = 0; i < length; i++ ){
        newString += isEquivalent(input.charAt(i));
    }
    return newString;

}

console.log(changeItUp("Cat30"));

