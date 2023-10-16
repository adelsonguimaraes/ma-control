const PLAYERS = [];

const splash = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    img.src = './assets/img/icon.svg';
    span.innerText = 'Iniciar';

    div.classList.add('splash');
    div.append(img);
    div.append(span);
    
    document.body.append(div);

}

const addPlayer = () => {
    const colors = ['amarelo', 'azul', 'lilas', 'verde_claro', 'verde', 'vermelho'];
    const inputNick = document.querySelector('input[name="nick"]');
    const btn = document.querySelector('button#addPlayer');
    btn.addEventListener('click', () => {
        if (inputNick.value == "") return false;
        if (inputNick.value.length > 8) return alert('O nick utrapassa o tamanho permitido.');
        if (PLAYERS.length >= 6) return alert('O total de players já foi atingido.');

        const list = document.querySelector('div.list');
        const itemList = document.createElement('div');
        const left = document.createElement('div');
        const img = document.createElement('img');
        const center = document.createElement('div');
        const nick = document.createElement('span');
        const ul = document.createElement('ul');
        const life = document.createElement('li');
        const life2 = document.createElement('li');
        const imgLife = document.createElement('img');
        const imgLife2 = document.createElement('img');
        const right = document.createElement('div');
        const imgCell = document.createElement('img');

        _colors = colors.filter(color => PLAYERS.map(player => player.color).indexOf(color) == -1);
        _color = _colors[Math.floor(Math.random() * (_colors.length-1))];

        itemList.classList.add('item-list');
        
        left.classList.add('left');
        img.src = `./assets/img/player_${_color}.svg`;
        left.append(img);
        itemList.append(left);
        
        center.classList.add('center');
        nick.classList.add('nick');
        nick.innerText = inputNick.value;
        center.append(nick);

        imgLife.src = "./assets/img/chip_coracao.svg";
        imgLife2.src = "./assets/img/chip_coracao.svg";
        life.append(imgLife);
        life2.append(imgLife2);
        ul.append(life);
        ul.append(life2);
        center.append(ul);
        itemList.append(center);

        right.classList.add('right');
        // imgCell.src= "./assets/img/cela.svg";
        // right.append(imgCell);
        itemList.append(right);

        list.append(itemList);

        inputNick.value = '';
        
        PLAYERS.push({
            name: inputNick.value,
            color: _color,
            
        });
    });
}

const buttonStatus = () => {
    const _buttons = document.querySelectorAll('button.validate');
    _buttons.forEach(button => {
        button.classList.add('disabled');
    });
}

const startGame = () => {
    const _btn = document.querySelector('button#startGame');
    _btn.addEventListener('click', () => {
        if (PLAYERS.length < 3) {
            return alert("O mínimo para jogar são 3 pessoas.");
        }
    });
}

const actions = () => {
    const splash = document.querySelector('div.splash');
    splash.addEventListener('click', () => {
        splash.remove();
        playSound('tense_theme', 8);
    });
    addPlayer();
    // buttonStatus();
    startGame();
}

const playSound = (sound, volume=1) => {
    const audio = new Audio()
    audio.src = `./assets/audio/${sound}.mp3`
    audio.volume = volume/10;
    audio.play()
}


document.addEventListener('DOMContentLoaded', () => {
    splash();
    actions();
});