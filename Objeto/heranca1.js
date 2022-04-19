const ferrari = {
    modelo: "F40",  
    velMax: 324,  
};

const volvo = {
    modelo: "v40",
    velMax: 200,   
};

console.log(Object.getPrototypeOf(ferrari)); // Na forma antiga, seria ferrari.__proto__
console.log(Object.getPrototypeOf(ferrari) === Object.prototype);
console.log(Object.getPrototypeOf(volvo) === Object.prototype);
console.log(Object.getPrototypeOf.prototype === undefined);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);