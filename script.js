let audios = [
    {caminho:'A Morte do Autotune.mp3', legenda:'Matue morte do autotune'},
    {caminho:'Iframe 9. L7NNON - Perdição _ HHR [uzSme3PRhZ0].mp3', legenda:'Perdição'},
    {caminho:'Iframe Acústico 1Kilo - Deixe-me Ir (Baviera, Knust e Pablo Martins) [TQ5DUv_ZwRg].mp3', legenda:'Deixe me ir'},
    {caminho:'Hayit.mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
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
