First readme file

NOVA FUNCIONALIDADE

new index and style

COMANDOS DO GIT

GIT config --GLOBAL USER.NAME "" - CONFIGURA NOME DE USUARIO
GIT congif --GLOBAL USER.EMAIL "" - CONFIGURA EMAIL
GIT config --GLOBAL CORE.EDITOR VSCODE - CONFIGURA O EDITOR PADRAO

GIT INIT - INICIA O REPOSITORIO NO GIT.
GIT STATUS - VERIFICA SE HA ALTERACOES NA PASTA
GIT LOG - MOSTRA OS COMMITES REALIZADOS

GIT ADD -A - ENVIA AS ALTERACOES PARAO GIT
GIT COMMIT -M ""- E O TITULO PARA IDENTIFICAR AS ALTERACOES
GIT BRANCH NOME DO BRANCH - CRIA UM NOVO BRANCH
GIT CHECKOUT NOME DO BRANCH - ALTERA O BRANCH

GIT RESET --HARD - VOLTA A VERSAO ANTERIOR
GIT RESET --SOFT - VOLTA A VERSAO ANTES DO COMMIT
GIT RESET --MIXED - VOLTA A VERSAO ANTES DE ADICIONAR OS ARQUIVOS. Comando feito seguido dos 7 numeros do commit que quer voltar

GIT DIFF - VERIFICA SOMENTE O CONTEUDO DO ARQUIVO ALTERADO
GIT DIFF --NAME-ONLY - RETORNA O NOME DO ARQUIVO ALTERADO


CONEXAO EXTERNA

 ssh-keygen -t rsa -b 4096 -C "MESMO EMAIL USADO NO GIT"

 Ignorando arquivos na hora do push

 crie um arquivo .ignore
 -> dentro do arquivo voce define o que sera ocultado no arquivo .ignore como por exemplo: pastas, arquivos...
 entre asteriscos coloque a extensao do arquivo ou o caminho da pasta que sera ocultada ex:

example.sql (nome do arquivo)
 *.sql*
 /src/*

 Comando GIT revert
 volta o commit feito, mas deixa o codigo



