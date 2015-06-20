function No(triplas, triplasPossiveis, i, j){
	this.valor = Tabuleiro.avaliar(triplasPossiveis);
	this.nivel = 0;
	this.pai = null;
	this.filhos = new Array();
	this.max = this.valor;
	this.min = this.valor;
	this.triplas = triplas;
	this.triplasPossiveis = triplasPossiveis;
	// coordenadas da jogada que originou esse tabuleiro
	this.jogada_i = i;
	this.jogada_j = j;
}

No.prototype.addFilho = function(no) {
	no.pai = this;
	no.nivel = this.nivel + 1;
	this.filhos.push(no);
};

No.prototype.percorrer = function() {
	percorrerRecursivo(this);
};

function percorrerRecursivo (no){
	/*
	if (no.nivel % 2 == 0)
		no.valor = no.max;
	else
		no.valor = no.min;
	*/
	console.log("Valor: " + no.valor + ", nivel: " + no.nivel + ", max: " + no.max + ", min: " + no.min);
	//console.log("Valor: " + no.valor + ", nivel: " + no.nivel);
	if (no.filhos.length == 0)
		return;

	for (var i = 0; i < no.filhos.length; i++)
		percorrerRecursivo(no.filhos[i]);
}

function minimax (no){
	for (var i = 0; i < no.filhos.length; i++)
		minimax(no.filhos[i]);

	if (no.pai != null){
		if (no.pai.max === null && no.pai.min === null){
			no.pai.max = no.max;
			no.pai.min = no.min;
		}
		else {
			if (no.max > no.pai.max ) no.pai.max = no.max;
			if (no.min < no.pai.min ) no.pai.min = no.min;
		}
	}

	if (no.filhos.length == 0)
		return;

}