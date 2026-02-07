function firstNonRepeatingLetter(s) {
  
    // Se tiver uma letra retorna ela mesma
    if (s.length === 1) return s;
    
    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < s.length; j++) {

            // Se comparar posição com posição pula esse loop
            if (i === j) continue;

            if (s[i] !== s[j]) {
                // console.log(s[i] + " é diferente de " + s[j]);
                if (j === s.length - 1) {
                    return s[i];
                }
            } else {
                // console.log(s[i] + " é igual a " + s[j]);
                break;
            }
                         
        }

    }

    return "";

}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("moonmen"));