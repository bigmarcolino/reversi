function Jogada(casaEscolhida, triplas, jogador){
	this.casaEscolhida = casaEscolhida;
	this.triplas = triplas;
	this.jogador = jogador;
}

/*
Stack jogadas

Tabuleiro
	obterTriplas	

Jogada
	casaEscolhida
	(x,y,tipo) todas as casas -> refresh, recalcular possiveis ultima jogada
	jogador
	
desfazerJogada
	- restaurar matriz
	- trocar jogador
	- qdo houver pontos reverter os pontos
*/
