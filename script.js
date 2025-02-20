let audios = [
    {caminho:'A Morte do Autotune.mp3', legenda:'Morte do autotune'},
    {caminho:'Iframe 9. L7NNON - Perdição _ HHR [uzSme3PRhZ0].mp3', legenda:'Perdição'},
    {caminho:'Iframe Acústico 1Kilo - Deixe-me Ir (Baviera, Knust e Pablo Martins) [TQ5DUv_ZwRg].mp3', legenda:'Deixe me ir'},
    {caminho:'Iframe BIN - Quase uma Semana FT. L7NNON, Borges (prod.Ajaxx) [RiYQ90oyYBw].mp3', legenda:'Quase uma semana'},
    {caminho:'Iframe BIN - Saturno (prod. Ajaxx) [VF97zz_5oCc].mp3', legenda:'Saturno'},
    {caminho:'Iframe Charlie Brown Jr - como tudo deve ser [d4iGRWvlfMY].mp3', legenda:'Como tudo deve ser'},
    {caminho:'Iframe Charlie Brown Jr. - Me Encontra (Lyric Video) [eG4mIKjrOq0].mp3', legenda:'Me encontra'},
    {caminho:'Iframe Charlie Brown Jr. - Meu Novo Mundo _OFICIAL HD_ [jp288zfsNTI].mp3', legenda:'Meu novo mundo'},
    {caminho:'Iframe Charlie Brown Jr. - Só Os Loucos Sabem (Video Clipe) [JRJj4z-prvM].mp3', legenda:'Só os loucos sabem'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
