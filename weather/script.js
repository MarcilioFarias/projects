/*ASYNC - (codigo nao ordenado) espera a resposta para continuar o codigo */

let search = document.querySelector('.busca');

search.addEventListener('submit', async (event) => {
    /*previne o comportamento padrao.
    Nao vai enviar o formulario*/
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {

        clearInfo();
        showWarning('Loading...');

        /*encode url serve para padronizar o link no browser */
        /*adicionando parametro a API
        &units=metric. Alterando o padrao F para C*/
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric`;
        /*faz a requisicao e esperao resultado */
        let result = await fetch(url);
        /*pega o resultado e converte em json */
        let json = await result.json();

        if (json.cod === 200) {

            showInfo(
                {
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    tempIcon: json.weather[0].icon,
                    windSpeed: json.wind.speed,
                    windAngle: json.wind.deg
                }
            );


        } else {
            ClearInfo();
            showWarning('Lugar nao encontrado =(');
        }
    } else {
        clearInfo();
    }
    

});

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function showInfo(json) {
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;
    /*exibe o resultado na tela */
    document.querySelector('.resultado').style.display = 'block';

}