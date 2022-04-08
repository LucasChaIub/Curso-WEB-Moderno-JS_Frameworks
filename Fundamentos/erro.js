function tratarErroELancar(erro) {
    // throw new Error("ERRO!!!");
    // throw 10;
    // throw true;
    // throw "mensagem";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date(),  
    };
}

function imprimiNomeGarrafao(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);      
    } finally {
      console.log("Final");
    }  
}

const obj = { name: "Lucas" };
imprimiNomeGarrafao(obj); 