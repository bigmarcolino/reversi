jogada(0, 0, 0).
jogada(0, 1, 0).
jogada(0, 2, 0).
jogada(0, 3, 0).
jogada(0, 4, 0).
jogada(0, 5, 0).
jogada(0, 6, 0).
jogada(0, 7, 0).
jogada(1, 0, 0).
jogada(1, 1, 0).
jogada(1, 2, 0).
jogada(1, 3, 0).
jogada(1, 4, 0).
jogada(1, 5, 0).
jogada(1, 6, 0).
jogada(1, 7, 0).
jogada(2, 0, 0).
jogada(2, 1, 0).
jogada(2, 2, 0).
jogada(2, 3, 0).
jogada(2, 4, 0).
jogada(2, 5, 0).
jogada(2, 6, 0).
jogada(2, 7, 0).
jogada(3, 0, 0).
jogada(3, 1, 0).
jogada(3, 2, 0).
jogada(3, 3, 1).
jogada(3, 4, 2).
jogada(3, 5, 0).
jogada(3, 6, 0).
jogada(3, 7, 0).
jogada(4, 0, 0).
jogada(4, 1, 0).
jogada(4, 2, 0).
jogada(4, 3, 2).
jogada(4, 4, 1).
jogada(4, 5, 0).
jogada(4, 6, 0).
jogada(4, 7, 0).
jogada(5, 0, 0).
jogada(5, 1, 0).
jogada(5, 2, 0).
jogada(5, 3, 0).
jogada(5, 4, 0).
jogada(5, 5, 0).
jogada(5, 6, 0).
jogada(5, 7, 0).
jogada(6, 0, 0).
jogada(6, 1, 0).
jogada(6, 2, 0).
jogada(6, 3, 0).
jogada(6, 4, 0).
jogada(6, 5, 0).
jogada(6, 6, 0).
jogada(6, 7, 0).
jogada(7, 0, 0).
jogada(7, 1, 0).
jogada(7, 2, 0).
jogada(7, 3, 0).
jogada(7, 4, 0).
jogada(7, 5, 0).
jogada(7, 6, 0).
jogada(7, 7, 0).

jogador(1).
jogador(2).


% Tabuleiro: uma lista de triplas
% Jogada: lista [x,y] onde 0<=x,y<=7
% Jogador: 1,2
% JogadasPossiveis: lista de pares com jogadas possiveis
% ver se que é melhor que o jogador fique junto das jogadasPossiveis, no formato [x,y,Jogador]
/*
possivel(Tabuleiro, Jogada, Jogador, JogadasPossiveis) :- ???

eliminarJogadasIdenticas(Tabuleiro, Jogador, JogadasPossiveis, JogadasPossiveisSemRepeticao) :- ???

jogar(Tabuleiro, Jogada, Jogador, TabuleiroNovo) :- ???

fim(Tabuleiro, Jogada, Jogador) :- ???
*/

vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 =:= X2, Y1 = Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 + 1 =:= X2, Y1 + 1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 + 1 =:= X2, Y1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 =:= X2, Y1 + 1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 - 1 =:= X2, Y1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 - 1 =:= X2, Y1 - 1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 =:= X2, Y1 - 1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 + 1 =:= X2, Y1 - 1 =:= Y2.
vizinho([X1|[Y1|_]], [X2|[Y2|_]]) :- X1 - 1 =:= X2, Y1 + 1 =:= Y2.


% definir funcoes f,g e h para o jogo

