Jogador.id = 0;

Jogador.HUMANO = 0;
Jogador.IA1 = 1;
Jogador.IA2 = 2;

function Jogador (){
	Jogador.id ++;
	this.id = Jogador.id;
	this.nome = "Jogador " + Jogador.id;
	this.tempo = 0;
	this.pontos = 2;
	this.jogadas = 0;
	this.oponente = null;
	this.tipo = Jogador.HUMANO;
}

Jogador.prototype.passarVez = function (){
	$("#vez").text("Jogador " + this.oponente.id);
	$("#vez").removeClass();
	$("#vez").addClass("jogador" + this.oponente.id);
	console.log(this);
	console.log(this.oponente);
	return this.oponente;
}

Jogador.prototype.clonar = function (){
	var jogador = new Jogador();
	jogador.id = this.id;
	jogador.nome = this.nome;
	jogador.tempo = this.tempo;
	jogador.pontos = this.pontos;
	jogador.tipo = this.tipo;
	jogador.jogadas = this.jogadas;
	var oponente = new Jogador;
	oponente.id = this.id;
	oponente.nome = this.nome;
	oponente.tempo = this.tempo;
	oponente.pontos = this.pontos;
	oponente.tipo = this.tipo;
	oponente.jogadas = this.jogadas;
	jogador.oponente = oponente;
	oponente.oponente = jogador;
	return jogador;
}

Jogador.prototype.jogar = function (tabuleiro){
	switch (this.tipo) {
		case Jogador.HUMANO:
			break;
		case Jogador.IA1:
			break;
		case Jogador.IA2:
			break;						
	}

}
