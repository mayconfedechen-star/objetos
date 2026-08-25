const maycon={
    nome: "maycon",
     idade: 32,
     cpf:"1122233345",
     email:"maycon@dominio.com",

};

console.log(
` eu sou o maycon e venho te venho te ver hoje $(maycon.nome) e essa pessoa tem amizade comigo e o nome dela é  $(lucas  .idade) anos.`

);

const chaves = [ "nome" ,"idade " ,"cpf","email"];

chaves.forEach((chave) => {
    console.log(` A chave $(chave) tem valor ${maycon [chave]})`);

});