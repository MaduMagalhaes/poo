class Album{
    static totalFigurinhas = 0;
  constructor(nome, maximoFigurinhas) {
    this._nome= nome;
    this._maximoFigurinhas= maximoFigurinhas;
    this._figurinhas= [];
    this._totalFigurinhas= 0;
  }
  adicionarFigurinha(figurinha) {
    let valida = this.verificarFigurinha(figurinha);
    if (this._figurinhas.length < this._maximoFigurinhas && valida !=true) {
      this._figurinhas.push(figurinha);
      this._totalFigurinhas++;
      Album.totalFigurinhas++;

    }
  }
  verificarFigurinha(figurinha) {
    if(this._figurinhas.includes(figurinha)) {
      return true;
    } else {
        return false;
    }
  }
  getTotalFigurinhas() {
    return Album.totalFigurinhas;
  }
}

let objeto1 = new Album('a', 5);
objeto1.adicionarFigurinha(434);
objeto1.adicionarFigurinha(3);
objeto1.adicionarFigurinha(5);
objeto1.adicionarFigurinha(434);
objeto1.adicionarFigurinha(8);
objeto1.adicionarFigurinha(9);
console.log(objeto1);

let objeto2 = new Album('b', 3);
objeto1.adicionarFigurinha(1);
objeto2.adicionarFigurinha(2);
objeto2.adicionarFigurinha(5);
objeto2.adicionarFigurinha(5);
objeto2.adicionarFigurinha(7);
objeto2.adicionarFigurinha(6);
console.log(objeto2); 

let total = objeto2.getTotalFigurinhas();
console.log(total)