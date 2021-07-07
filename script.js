let j1 = document.getElementById('j1');
let j2 = document.getElementById('j2');
let L = document.getElementById('handL');
let R = document.getElementById('handR');
let res = document.getElementById('res');

let play = document.getElementById('play');
let btn = document.querySelectorAll('#btn button');
let error = document.querySelector('.error')
let com = 0;
let player = 0;

let pedra = document.getElementById('1');
let previousButton = pedra;


play.addEventListener('click', function(){
    error.innerHTML = '';
    com_choice();
    if(player >= 1 && player <=3){
        L.classList.add('L');
        R.classList.add('R');
        if(play.classList.contains('again')){
            escolha(com, 'Computador');
            escolha(Number(player));
            vencedor(player,com);
            again();
        }else{
            setTimeout(function(){
                escolha(com, 'Computador');
                escolha(Number(player));
                vencedor(player,com);
                again();
            },1300);
        };
    }else{
        error.innerHTML = 'Escolha uma das opções antes de jogar!';
    };
});

btn.forEach((player_choice) =>{
    player_choice.addEventListener('click', function(n){
        previousButton.classList.remove('click');
        previousButton = this;
        previousButton.classList.add('click');
        player = n.target.id;
        return player;
    });
});

function com_choice(min=1, max=4) {  
    com = Math.floor(Math.random() * (max - min)) + min;
    return com;
};

function escolha(num, p){
    switch(num){

        case 1:
            p == 'Computador' ? j2.innerHTML = `Computador Escolheu Pedra!` : j1.innerHTML = `Você Escolheu Pedra!`;  
        break;
    
        case 2:
            p == 'Computador' ? (j2.innerHTML = `Computador Escolheu Papel!`, R.innerHTML = '<img src="img/papelR.webp">') : (j1.innerHTML = `Você Escolheu Papel!`, L.innerHTML = '<img src="img/papel.webp">');
        break;
    
        case 3:
            p == 'Computador' ? (j2.innerHTML = `Computador Escolheu Tesoura!`, R.innerHTML = '<img src="img/tesouraR.webp">') : (j1.innerHTML = `Você Escolheu Tesoura!`, L.innerHTML = '<img src="img/tesoura.webp">');
        break;
                    
    };
};       

function vencedor(j1,j2){
    if(j1 == j2){
        res.innerHTML = 'Empate.';
    }
    else if(j1 == 1){
        j2 == 2 ? res.innerHTML = 'Você Perdeu...' : res.innerHTML = 'Voce Ganhou!';
    }
    else if(j1 == 2){
        j1 < j2 ? res.innerHTML = 'Você Perdeu...' : res.innerHTML = 'Voce Ganhou!';
    }else{
        j1-2 == j2 ? res.innerHTML = 'Você Perdeu...' : res.innerHTML = 'Voce Ganhou!';
    };
};

function again(){
    if(play.classList.contains('again')){
        play.classList.remove('again');
        L.classList.remove('L');
        R.classList.remove('R');
        play.innerText = 'Jogar';
        player = 0;
        j1.innerHTML = '';
        j2.innerHTML = '';
        res.innerHTML = 'ESCOLHA';
        L.innerHTML = '<img src="img/pedra.webp">';
        R.innerHTML = '<img src="img/pedraR.webp">';
        previousButton.classList.remove('click');
    }else{
        play.classList.add('again');
        play.innerText = 'Novamente';
    };
};
