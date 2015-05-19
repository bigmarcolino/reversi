### Instruções
*****************************************

#### Instalar

```
sudo apt-get update
sudo apt-get install node-gyp
sudo apt-get install nodejs
sudo apt-get install npm
```

#### Executar

Dentro da pasta server:	
```
npm install
```

Dentro da past prolog:
```	
node-gyp configure
SWI_HOME_DIR=/usr/lib/swi-prolog node-gyp build 
```
#### Rodar o servidor
Dentro da pasta reversi/server executar:
```
SWI_HOME_DIR=/usr/lib/swi-prolog NODE_PATH=../prolog/build/Release nodejs testeProlog.js
```

Links:
1. https://github.com/kloni/node-prolog-swi#a-nodejs-interface-to-the-swi-prolog-library
2. http://stackoverflow.com/questions/14951251/how-to-call-node-js-server-side-method-from-javascript
