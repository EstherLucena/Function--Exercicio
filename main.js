//METODOS

var nome= 'Esther';
console.log(nome.charAt(0)); // retornar o item que esta no index informado

const texto= 'Hello, World!';
console.log(texto.substring(0,5)); // Exibe "Helo"

const num = 14102001;
const as = num.toString(2);
console.log(as);  //conversao para num binario

const texto1= 'Maça, Banana , Manga';
const frutas = texto1.split(',');
console.log(frutas); // transformando string em array

const texto2= ['Maça, Banana , Manga'];
const frutas1 = texto2.join(',');
console.log(frutas1); // transformando array em string

const numeros= [1,2,3];
const dobrados = numeros.map((numero)=> numero * 2);
console.log(dobrados); //novo array com aplicação de função