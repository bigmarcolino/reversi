function No(valor){
	this.valor = valor === undefined ? null : valor;
	this.nivel = 0;
	this.pai = null;
	this.filhos = new Array();
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
	console.log("Valor: " + no.valor + ", nivel: " + no.nivel);

	if (no.filhos.length == 0)
		return;

	for (var i = 0; i < no.filhos.length; i++)
		percorrerRecursivo(no.filhos[i]);
}