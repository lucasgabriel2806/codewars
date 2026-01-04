/** 
Complete o método/função para que ele converta palavras delimitadas por hífen/sublinhado em camel case. A primeira palavra na saída deve ser escrita com inicial maiúscula somente se a palavra original já estiver em maiúscula (conhecido como Upper Camel Case, também chamado de Pascal case). As palavras seguintes devem sempre ser escritas com inicial maiúscula. 

Exemplos
"the-stealth-warrior" é convertido para "theStealthWarrior"

"The_Stealth_Warrior" é convertido para "TheStealthWarrior"

"The_Stealth-Warrior" é convertido para "TheStealthWarrior"
*/

function toCamelCase(str){

    // Convertendo a string em array,
    // para removermos os - e _ através do indice do array.
    str = str.split("");

    // Usando for para percorrer o array elemento por elemento
    // para acharmos os - e _ e remove-los.
    for(let i = 0; i < str.length; i++) {
        if (str[i] == "-" || str[i] == "_") {
            // Trocamos o - ou _ por "".
            str[i] = "";

            // Transformando o primeiro caracter em maiusculo
            str[i + 1] = str[i + 1].charAt(0).toUpperCase();
        }
    }

    str = str.join("");
    return str;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));