class Caminhao extends Veiculo{
    _eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this._eixos = eixos;
    }

    setEixos(eixos){
        this._eixos = eixos;
    }

    getEixos(){
        return this._eixos;
    }

    exibirDados(){
        super.exibirDados();
        console.log("Eixos: ", this._eixos);
    }
}

var caminhao = new Caminhao("123DEF", 2022, 6);

caminhao.exibirDados();
