$(function(){

    $.ajax({
        url: 'https://api.b7web.com.br/cinema/',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('.filmes').html('<div class="col-md-12">Carregando...</div>');
        },
        success: function (json) {
            /*console.log(json);*/

            /*criacao de variavel para criacao de estrutura */
            var html = '';
            /*Pega todos os elementos dentro do json e cria a estrutura para exibicao */
            for (var i in json) {
                html += '<div class="col-md-4"><div class="filme"><img src="'+json[i].avatar+'"/>' + json[i].titulo + '</div></div>';
            }
            /*Exibe os resultado do json no grid .filmes */
            $('.filmes').html(html);

        }
    });
});