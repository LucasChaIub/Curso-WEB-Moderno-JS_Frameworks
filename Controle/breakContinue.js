const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
    if (x == 5) {
        break; // Para o processo
    } 
    console.log(`${x} = ${nums[x]}`);
}

for (let y in nums) {
    if (y == 5) {
        continue; // Continua o processo mas pula o indice demarcado, nesse caso o "5"
    } 
    console.log(`${y} = ${nums[y]}`);
}

// Evitar usar o método abaixo:
externo: 
for (let a in nums) {
    for (let b in nums) {
        if(a == 2 && b == 3) break externo;
            console.log(`Par = ${a},${b}`);  
    }
}
