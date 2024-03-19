let num = [5,8,4];
num[3] = 6;
num.push(7); // adicionar um valor no final 
// num.length;  para saber o tamanho do array -- quantas casas ou elementos 
// num.sort();  coloca em ordem crescente. -- precisa colocar primeiro 
console.log (`nosso vetor é ${num} e tem ${num.length} posições`);
console.log (`o primeiro valor do vetor é ${num[0]}`)


// valores.indexOf(7) --- para buscar valores dentro do arrays
// se não encontrar valor, volta -1 

let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`) 
