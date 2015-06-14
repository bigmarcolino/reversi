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
	this.updateHTML();
	console.log(this);
	console.log(this.oponente);
	return this.oponente;
}

Jogador.prototype.updateHTML = function (){
	if (this.oponente.id == Tipo.JOGADOR1){
		$("#statusJogador1").addClass("jogador1Vez");
		$("#statusJogador1").removeClass("jogadorEspera");
		$("#statusJogador2").addClass("jogadorEspera");
		$("#statusJogador2").removeClass("jogador2Vez");
	}
	else {
		$("#statusJogador2").addClass("jogador2Vez");
		$("#statusJogador2").removeClass("jogadorEspera");
		$("#statusJogador1").addClass("jogadorEspera");		
		$("#statusJogador1").removeClass("jogador1Vez");
	}
	
	var nome, tempo, pontos, jogadas, id;
	var jogadores = new Array(this, this.oponente);
	for (var j = 0; j <= 1; j++) {
			
		pontos = jogadores[j].pontos;
		jogadas = jogadores[j].jogadas;
		id = jogadores[j].id;
			 
		if (jogadores[j].tipo == Jogador.HUMANO){
			nome = "Humano";
			tempo = parseInt(jogadores[j].tempo/1000.0)+"s";
		}
		else {
			if (jogadores[j].tipo == Jogador.IA1)
				nome = "IA1";
			else if (jogadores[j].tipo == Jogador.IA2)
				nome = "IA2";
			tempo = parseInt(jogadores[j].tempo)+"ms";
							
		}
		
		$("#nome"+id).text(nome);
		$("#tempo"+id).text(tempo);
		$("#pontos"+id).text(pontos);
		$("#jogadas"+id).text(jogadas);						
	}
}

/*
		<div id="statusJogador1" class="jogador jogador1 jogador1Vez">
			<span id="nome1"> Humano </span> <br/><br/>
			<span style="float:left">tempo:</span> <span id="tempo1" style="float:right">0s</span> <br/>
			<span style="float:left">pontos:</span> <span id="pontos1" style="float:right">2</span> <br/>
			<span style="float:left">#jogadas:</span> <span id="jogadas1" style="float:right">0</span> <br/>
		</div>
*/

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

