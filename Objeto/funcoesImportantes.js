const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13,      
};

console.log(Object.keys(pessoa)); // Keys = nome, idade, peso
console.log(Object.values(pessoa)); // Values = Rebeca, 2, 13
console.log(Object.entries(pessoa)); // Entries = Conjuto de sub-arrays [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${(valor)}`);  
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "04/04/2000",      
});

pessoa.dataNascimento = "01/10/2010";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };  
const o1 = { b: 2 };  
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);