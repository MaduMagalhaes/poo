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

exports.Album = Album;