// 1 Filter

const numeros = [2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

// 2 Map

const nomes = ['Esther', 'Maria', 'Jana', 'Vic'];
const nomesUpper = nomes.map((nome) => nome.toUpperCase());
console.log(nomesUpper);

// 3 ForEach

var names = ['Esther', 'Maria', 'Julia', 'Jana', 'Vic', 'Lari'];
names.forEach(function (item) {
    console.log(`Olá ${item}!`);
});

// 4 - 5 Filter e Map ( strings )

const strings1 = ['Maça', 'Banana', 'Manga', 'Kiwi'];
const letraM = strings1.filter((letra) => letra.charAt(0) === 'M' || letra.charAt(0) === 'm');
const fruitsUpper = letraM.map((name) => name.toUpperCase());
console.log(`Essas são as frutas: ${strings1}`);
console.log(`Essas sao as frutas que começam com a letra M: ${letraM}`);
console.log(fruitsUpper);

// 6 map, filter, foreach

// const notas = [5,9,7];
// const Media = notas.map((numbero) => numbero  );

// const dobrados = numeros.map((numero)=> numero * 2);


const notasAluno = [5, 7, 9];
const soma = notasAluno.reduce((soma, notinha) => soma + notinha, 0);
const media = soma / notasAluno.length;
console.log(media);

if (media >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}
