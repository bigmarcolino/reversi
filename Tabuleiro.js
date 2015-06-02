function Tabuleiro(id, dimensao, qtdQuadrados){
	this.qtdQuadrados = qtdQuadrados;
	this.dimensao = dimensao;
	this.id = id;
	this.div = document.getElementById(this.id);
	this.raioBorda = dimensao / 24;
	this.possiveisUltimaJogada = new Array();
	
	with (this.div.style){
		height = width = dimensao+"px";
	}			

	this.casas = new Array(this.qtdQuadrados);
	
	for (var i = 0; i < this.qtdQuadrados; i++)	
		this.casas[i] = new Array(this.qtdQuadrados);
	
	var casa, iLimite = this.qtdQuadrados - 1;
		
	for (var i = 0; i < this.casas.length; i++)	
		for (var j = 0; j < this.casas[i].length; j++){
			casa = new Casa(Tipo.VAZIO, this.dimensao / this.qtdQuadrados);
			
			casa.div.id = this.id+i+""+j;
			casa.x = i;	
			casa.y = j;		
			
			//casa.div.innerHTML = casa.div.id; /*debug*/
		
			if (i == 0 && j == 0)
				casa.div.style.borderTopLeftRadius = this.raioBorda+"px";
			if (i == 0 && j == iLimite)
				casa.div.style.borderTopRightRadius = this.raioBorda+"px";
			if (i == iLimite && j == 0)
				casa.div.style.borderBottomLeftRadius = this.raioBorda+"px";
			if (i == iLimite && j == iLimite)
				casa.div.style.borderBottomRightRadius = this.raioBorda+"px";
				
			this.casas[i][j] = casa;
									
			this.div.appendChild(casa.div);
			
			console.log(this.casas[i][j].toHTML());	
		}
			
}

Tabuleiro.prototype.toString = function(){
	var buff = "";
	for (var i = 0; i < this.casas.length; i++)	
		for (var j = 0; j < this.casas[i].length; j++)
			buff += i + ", " + j + ", " + this.casas[i][j].toString() + "\n";
	return buff;
}

// atualizar propriedade do objeto -> atualizar div
Tabuleiro.prototype.refresh = function(){
	with (this.div.style){
		height = width = this.dimensao+"px";
	}	

	for (var i = 0; i < this.casas.length; i++)	
		for (var j = 0; j < this.casas[i].length; j++){
			this.casas[i][j].dimensao = this.dimensao / this.qtdQuadrados;	
			this.casas[i][j].refresh();				
		}

}

Tabuleiro.prototype.ehIgual = function (casaA, casaB) {
	return casaA.x == casaB.x && casaA.y == casaB.y;
}

Tabuleiro.prototype.mesmaLinha = function(casaA, casaB){
	if (this.ehIgual(casaA,casaB)) return false;
	if (casaA.x == casaB.x) return true;
	return false;
} 

Tabuleiro.prototype.mesmaColuna = function(casaA, casaB){
	if (this.ehIgual(casaA,casaB)) return false;
	if (casaA.y == casaB.y) return true;
	return false;		
}

Tabuleiro.prototype.mesmaDiagonalSecundaria = function(casaA, casaB){
	if (this.ehIgual(casaA,casaB)) return false;
	if (casaA.x + casaA.y == casaB.x + casaB.y) return true;
	return false;		
}

Tabuleiro.prototype.mesmaDiagonalPrimaria = function(casaA, casaB){
	if (this.ehIgual(casaA,casaB)) return false;
	if (Math.abs(casaA.x - casaB.x) == Math.abs(casaA.y - casaB.y)) return true;
	return false;		
}

Tabuleiro.prototype.existeCaminho = function(casaA, casaB){
	return this.mesmaLinha(casaA, casaB) || this.mesmaColuna(casaA, casaB) ||
		this.mesmaDiagonalPrimaria(casaA, casaB) || this.mesmaDiagonalSecundaria(casaA, casaB);
		
}

Tabuleiro.prototype.caminho = function (casaA, casaB){
	var casasDoCaminho = new Array();
	var i0, j0, i1, j1, di, dj;
	
	if (this.mesmaLinha(casaA, casaB)){
		i0 = i1 = casaA.x;
		j0 = casaA.y;
		j1 = casaB.y;
		
		if (j1 > j0) dj = 1;
		else dj = -1;
		
		j0 += dj;
		
		while (j0 != j1){
			casasDoCaminho.push(this.casas[i0][j0]);
			j0 += dj;
		}
		
	} 
	else if (this.mesmaColuna(casaA, casaB)){
		i0 = casaA.x;
		i1 = casaB.x;
		j0 = j1 = casaA.y;
		
		if (i1 > i0) di = 1;
		else di = -1;
		
		i0 += di;
		
		while (i0 != i1){
			casasDoCaminho.push(this.casas[i0][j0]);
			i0 += di;
		}
	}
	else if (this.mesmaDiagonalPrimaria(casaA, casaB) || this.mesmaDiagonalSecundaria(casaA, casaB)){
		i0 = casaA.x;
		i1 = casaB.x;
		j0 = casaA.y;
		j1 = casaB.y;
		
		if (i1 > i0 && j1 > j0) 
			di = dj = 1;
		else if (i1 < i0 && j1 < j0)
			di = dj = -1;					
		else if (i1 > i0 && j1 < j0) {
			di = 1;
			dj = -1;
		}
		else if (i1 < i0 && j1 > j0) {
			di = -1;
			dj = 1;
		}
		
		i0 += di;
		j0 += dj;
		
		while (true){
			if (i0 == i1 && j0 == j1) break;
			casasDoCaminho.push(this.casas[i0][j0]);
			i0 += di;
			j0 += dj;					
		}			
	}
	
	return casasDoCaminho;
}

Tabuleiro.prototype.caminhoHomogeneo = function (caminho, jogador){
	var resposta = true;
	
	if (caminho.length == 0) return false;
			
	for (var i = 0; i < caminho.length; i++){
		if (caminho[i].tipo != jogador)
			return false;	
	}
	
	return resposta;
}

Tabuleiro.prototype.selecionaCasasDoTipo = function (tipo){
	var casas = new Array();
	for (var i = 0; i < this.casas.length; i++)	
		for (var j = 0; j < this.casas[i].length; j++)
			if (this.casas[i][j].tipo == tipo)
				casas.push(this.casas[i][j]);
	return casas;
}

// retorna a lista de casas possiveis para um jogador
Tabuleiro.prototype.jogadasPossiveis = function(jogador){
	// se existe caminho soh de brancos entre casas jogador A e vizinhos vazios jogador B
	
	var possiveis = new HashSet();
	if (jogador == Tipo.JOGADOR1) oponente = Tipo.JOGADOR2;
	else oponente = Tipo.JOGADOR1;
		
	var casasJogadorDaVez = this.selecionaCasasDoTipo(jogador);			
	
	var vizinhosOponente = this.vizinhosVazios(oponente);
	var caminho;
	
	for (var i = 0; i < casasJogadorDaVez.length; i++)
		for (var j = 0; j < vizinhosOponente.length; j++){
			caminho = this.caminho(casasJogadorDaVez[i], vizinhosOponente[j]);
			if (caminho.length > 0 && this.caminhoHomogeneo(caminho, oponente)) 
				possiveis.add(vizinhosOponente[j]);
		}
	
	return possiveis.values();
}

// se jogador = 1, retorna todos os vizinhos das casas preechidas pelo
// jogador 1 que estão vazios
Tabuleiro.prototype.vizinhosVazios = function (jogador){
	var vizinhos = new HashSet();
	for (var i = 0; i < this.casas.length; i++)	
		for (var j = 0; j < this.casas[i].length; j++){
			if (this.casas[i][j].tipo == jogador){
				if (this.posicaoValida(i-1, j-1)) vizinhos.add(this.casas[i-1][j-1]);
				if (this.posicaoValida(i-1, j)) vizinhos.add(this.casas[i-1][j]);
				if (this.posicaoValida(i+1, j+1)) vizinhos.add(this.casas[i+1][j+1]);
				if (this.posicaoValida(i+1, j)) vizinhos.add(this.casas[i+1][j]);
				if (this.posicaoValida(i, j-1)) vizinhos.add(this.casas[i][j-1]);
				if (this.posicaoValida(i-1, j+1)) vizinhos.add(this.casas[i-1][j+1]);
				if (this.posicaoValida(i+1, j-1)) vizinhos.add(this.casas[i+1][j-1]);
				if (this.posicaoValida(i, j+1)) vizinhos.add(this.casas[i][j+1]);
			}
		}
	return vizinhos.values();
}

Tabuleiro.prototype.posicaoValida = function (i, j){
	var lim = this.qtdQuadrados - 1;
	if ( (i >= 0 && i <= lim) && (j >= 0 && j <= lim) && this.casas[i][j].ehVazio())
		return true;
	return false;
}

// assumindo casaA posição possivel
Tabuleiro.prototype.todosCaminhos = function (casaA, jogador){
	if (jogador == Tipo.JOGADOR1) oponente = Tipo.JOGADOR2;
	else oponente = Tipo.JOGADOR1;
	
	var caminhos = new Array();
	var casasDoTipo = this.selecionaCasasDoTipo(jogador);
	for (var i = 0; i < casasDoTipo.length; i++){
		var caminho = this.caminho(casaA, casasDoTipo[i])
		if (caminho.length > 0 && this.caminhoHomogeneo(caminho, oponente))
			caminhos.push(caminho);
	}
	
	return caminhos;
		
}

Tabuleiro.prototype.mostrarPossiveis = function (vez){
	for (var i = 0; i < this.possiveisUltimaJogada.length; i++) {
		$(this.possiveisUltimaJogada[i].div).removeClass("possivel");
		$(this.possiveisUltimaJogada[i].div).addClass("casa");				
	}

	this.possiveisUltimaJogada = this.jogadasPossiveis(vez);
	for (var i = 0; i < this.possiveisUltimaJogada.length; i++) {
		$(this.possiveisUltimaJogada[i].div).removeClass("casa");
		$(this.possiveisUltimaJogada[i].div).addClass("possivel");				
	}
}

Tabuleiro.prototype.jogadaValida = function (casa) {
	return this.possiveisUltimaJogada.indexOf(casa) >= 0;
}

Tabuleiro.prototype.fimDoJogo = function (){
	return this.jogadasPossiveis(Tipo.JOGADOR1).length == 0 && 
			this.jogadasPossiveis(Tipo.JOGADOR2).length == 0;
}
