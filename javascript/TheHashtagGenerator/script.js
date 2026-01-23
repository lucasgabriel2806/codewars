function generateHashtag(str) {

    str = str.trim();

    if (!str) return false;

    str = str.split(" ");

    console.log(str);

    let filterStr = str.filter((word, elem)=>{
        return word !== "";
    });

    console.log(filterStr);

    let newStr = filterStr.map((word, elem)=>{
        return word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();    
    });

    console.log(newStr);

    newStr.unshift("#");    

    newStr = newStr.join("");

    console.log(newStr);

    if(newStr.length > 140) {
        return false;
    }
    
    return newStr;

}

console.log(generateHashtag("code wARs"));
console.log(generateHashtag("Code wars"));
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag("       "));