Jogador.id = 0;

function Jogador (){
	Jogador.id ++;
	this.id = Jogador.id;
	this.nome = "Jogador " + Jogador.id;
	this.tempo = 0;
	this.pontos = 2;
	this.jogadas = 0;
	this.oponente = null;
}

Jogador.prototype.passarVez = function (){
	$("#vez").text("Jogador " + this.oponente.id);
	$("#vez").removeClass();
	$("#vez").addClass("jogador" + this.oponente.id);
	return this.oponente;
}

Jogador.prototype.clonar = function (){
	var jogador = new Jogador();
	jogador.id = this.id;
	jogador.nome = this.nome;
	jogador.tempo = this.tempo;
	jogador.pontos = this.pontos;
	jogador.jogadas = this.jogadas;
	var oponente = new Jogador;
	oponente.id = this.id;
	oponente.nome = this.nome;
	oponente.tempo = this.tempo;
	oponente.pontos = this.pontos;
	oponente.jogadas = this.jogadas;
	jogador.oponente = oponente;
	oponente.oponente = jogador;
}
