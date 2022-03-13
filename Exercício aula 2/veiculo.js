class Veiculo{
    _placa;
    _ano;

    constructor(placa, ano){
        this._placa = placa;
        this._ano = ano;
    }

    setPlaca(placa){
        this._placa = placa;
    }

    setAno(ano){
        this._ano = ano;
    }

    getPlaca(){
        return this._placa;
    }

    getAno(){
        return this._ano;
    }

    exibirDados(){
        console.log("Placa: ", this._placa);
        console.log("Ano: ", this._ano);
    }
}
