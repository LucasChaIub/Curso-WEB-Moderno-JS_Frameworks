const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
// ou
console.log("Escola " + escola + "!");

console.log(escola.replace(3, "e")); //pesquisar sobre regex | expressões regulares

console.log("Ana,Maria,Pedro".split(","));