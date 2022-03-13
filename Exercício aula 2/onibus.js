class Onibus extends Veiculo{
    _assentos;

    constructor(placa, ano, _assentos){
        super(placa, ano);
        this._assentos = _assentos;
    }

    setAssentos(assentos){
        this._assentos = assentos;
    }

    getAssentos(){
        return this._assentos;
    }

    exibirDados(){
        super.exibirDados();
        console.log("Assentos: ", this._assentos);
    }
}

var onibus = new Onibus("FHMB1998", 1998, 44);
onibus.exibirDados();       
