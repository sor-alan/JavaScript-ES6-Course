// 3.1

const arr = [1, 2, 3, 4, 5];

const teste1 = arr.map(item => item + 10);

console.log(teste1);

// 3.2

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => (usuario.idade);

console.log(mostraIdade(usuario));

// 3.3

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//3.4
const promise = () => {
return new Promise(function(resolve, reject) {
return resolve();
})
}