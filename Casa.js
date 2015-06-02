var Tipo = {
	VAZIO : 0,
	JOGADOR1: 1,
	JOGADOR2: 2
};
		
function Casa(tipo, dimensao){				
	this.tipo = tipo;
	this.dimensao = dimensao;	
	this.div = this.toHTML();
	this.x = this.y = 0;
}

Casa.prototype.toString = function(){
	return this.tipo + ", " + this.dimensao + " x " + this.dimensao;
}

Casa.prototype.toHTML = function(){
	var div = document.createElement("div");
	$(div).addClass("casa");
	div.innerHTML = this.tipo;
	with (div.style) width = height = this.dimensao + "px";
	return div;
}

Casa.prototype.refresh = function(){
	this.div.innerHTML = this.tipo;
	with (this.div.style) width = height = this.dimensao + "px";
}

Casa.prototype.ehVazio = function(){
	return this.tipo == Tipo.VAZIO;
}
