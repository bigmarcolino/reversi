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
	return this.oponente;
}

Jogador.prototype.jogar = function (casa){
	
}
