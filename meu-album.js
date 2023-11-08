const {Album} = require("./album");

let objeto1 = new Album('a', 5);
objeto1.adicionarFigurinha(434);
objeto1.adicionarFigurinha(3);
objeto1.adicionarFigurinha(5);
objeto1.adicionarFigurinha(434);
objeto1.adicionarFigurinha(8);
objeto1.adicionarFigurinha(9);
console.log(objeto1);

let total1 = objeto1.getTotalFigurinhas();
console.log(total1);

let objeto2 = new Album('b', 3);
objeto2.adicionarFigurinha(2);
objeto2.adicionarFigurinha(5);
objeto2.adicionarFigurinha(5);
objeto2.adicionarFigurinha(7);
objeto2.adicionarFigurinha(6);
console.log(objeto2); 

let total2 = objeto2.getTotalFigurinhas();
console.log(total2);

let objeto3 = new Album('c', 4);
objeto2.adicionarFigurinha(11);
objeto2.adicionarFigurinha(6);
objeto2.adicionarFigurinha(9);
objeto2.adicionarFigurinha(290);
objeto2.adicionarFigurinha(769);
objeto2.adicionarFigurinha(290);
objeto2.adicionarFigurinha(05);


let total3 = objeto3.getTotalFigurinhas();
console.log(total3);