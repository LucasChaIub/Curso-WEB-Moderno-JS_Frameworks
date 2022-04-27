const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Remove o ultimo elemento do Array
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona um novo elemneto no final do Array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do Array
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um novo elemneto no inicio do Array
console.log(pilotos);

// splice, pode adiconar e/ou remover elementos do Array

// Adicionando

// O '2' indica em qual indice o Array receberá uma alteração, já o "0" indica quantos elementos serão excluidos a partir do indice selecionado.
// Como nenhum indice está sendo excluido, o metodo adiciona oq for digita do após o "0".
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Removendo
pilotos.splice(3, 1);
console.log(pilotos); 

const algunsPilotos1 = pilotos.slice(2); // Cria um novo Array a partir do indice "2"
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Cria um novo Array a partir do indice "1" até o "4", porem, o "4" será incluido. 
console.log(algunsPilotos2);
