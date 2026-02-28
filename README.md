Um script simples em Python que permite fixar o chat do youtube (Ou qualquer outra janela se preferir) no topo de outras janelas.

Nota importante: As janelas fixadas podem não funcionar em jogos de tela cheia, recomendo fortemente usar em modo janela ou boorderless window para garantir que o chat/janela sempre fique no topo.

Instalação: 

-Clone o repositório para sua pasta de preferência usando esse comando no CMD "git clone https://github.com/MuriloMiguel/youtube-chat-always-on-top"
-Instale as depêndencias necessárias (win32gui) usando o comando "pip install win32gui"

Execução:

-Entre na pasta que contém o arquivo chat.py.
-Abra o CMD nessa pasta (Recomendo digitar na barra de local para abrir o CMD na pasta certa)
<img width="1757" height="699" alt="image" src="https://github.com/user-attachments/assets/a7493c70-b33a-415c-973b-253beb77cedf" />

-Execute o script utilizando o comando "python chat.py"

<img width="1102" height="511" alt="image" src="https://github.com/user-attachments/assets/736a73a8-14ec-40c6-b7cc-39b1144696ae" />

Após isso você verá uma lista numérica com todas as janelas abertas no seu computador (É essencial que o chat esteja em uma guia separada do seu navegador)

-Digite o número correspondente a aba desejada e pressione Enter.

-Você verá a janela escolhida ficar subtamente na frente das outras.

Nota: Ao utilizar a função do Windows/Mac de minimizar todas as janelas na área de trabalho, a janela fixada também será minimizada, basta abrir ela novamente que estará tudo OK.

Customização:

-Dentro da pasta Snippets você encontrará 2 arquivos javascript, esses são customizações para o chat do Youtube.

-Para aplicar as customizações, copie do código do tema desejado (Ex: style dark Theme.js)

-Entrar na janela fixada.

-Apertar F12 para entrar no DevTools.

-Entrar em console

-Colar o script e pressionar enter.

<img width="934" height="982" alt="image" src="https://github.com/user-attachments/assets/7f60c9dd-5bcb-42b6-8e11-dbdd4a47a24c" />


Nota: Se for sua primeira vez fazendo isso, o DevTools irá bloquear a função de colar comandos no console por questões de segurânça (Nunca cole códigos suspeitos no console, sempre verifique a origem e conteúdo).

Solução: Para habilitar a função de colar códigos usando o CTRL + C, basta digitar isso no console antes "allow pasting"

Caso você queira, também poderá customizar seu proprio Css para deixar do seu jeito, basta mudar as regras na sessão "style.textContent = `Seu css personalizado aqui`

Fiz esse repositório porque só tenho 1 monitor e sempre foi muito chato ter que ler o chat da minha live no celular, agora ficou bem mais conveniente, espero que você goste.

