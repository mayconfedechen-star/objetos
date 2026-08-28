const cliente={
    nome: "cliente",
     idade: 32,
     cpf:"1122233345",
     email:"anonimo@dominio.com",

};

console.log(`ò nome do cliente é ${ cliente [nome]} e essa pessoa tem ${ cliente [idade] } anos.`);

const chaves = [ "nome" ,"idade " ,"cpf","email"];

chaves.ForEach((chave)  => {
console.log(`A chave ${chave} tem valor ${ cliente
[chave]}`);

});
