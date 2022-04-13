function criarProduto(nome, preco) {
  return {
      nome,
      preco,
      desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 3999.99));
console.log(criarProduto("iPad", 999.99));