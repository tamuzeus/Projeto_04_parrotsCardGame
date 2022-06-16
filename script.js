
//Capturar numero
let cards = prompt('Com quantas cartas quer jogar? Escolha de 4 a 14');
let cardsNumber = parseInt(cards);

//Arrays
const frontCardsArray = ['unicornparrot.gif', 'tripletsparrot.gif', 'revertitparrot.gif', 'metalparrot.gif', 'fiestaparrot.gif', 'explodyparrot.gif', 'bobrossparrot.gif'];

///Condicional para negar jogo


if(cardsNumber%2 != 0 && cardsNumber != Number || cardsNumber == 2 || cardsNumber > 14){
    while(cardsNumber%2 != 0 && cardsNumber != Number || cardsNumber == 2 || cardsNumber > 14){
        alert("Para jogar é nescessário no mínimo 4 e no máximo 14 cartas, sendo um número par destas!")
        cards = prompt('Com quantas cartas quer jogar? Escolha de 4 a 14');
        cardsNumber = parseInt(cards);
    }
    cardGame(cardsNumber)   
}

else{
    cardGame(cardsNumber)
}

function cardGame(num){
    counter = 0;
    let gifsSlice = frontCardsArray.slice(0, num/2);
    let cardsSlice = gifsSlice.concat(gifsSlice);
    cardsSlice.sort(shuffleCards);

    while(counter < num){ //Se o contador for menor que o número de cards   

        let cardsTemplate = `
            <div class="cardArea" onclick="flipCard(this)">
    
                <div class="back-face face">
                    <img src="/img/front.png" alt="parrotImg" class="parrotImg">
                </div>
    
                <div class="front-face face">
                    <img src="/img/${cardsSlice[counter]}" class="parrotImg">
                </div>
            </div>
            `   
        let cardsZone = document.querySelector('.cardsZone'); 
        cardsZone.innerHTML += cardsTemplate //adicionando as divs dos arrays no html
        counter ++;//aumentando o contador
    }
}


function shuffleCards(){
    return Math.random() - 0.5;
}


function flipCard(element){
    element.classList.toggle('flip') //flip da carta
}


//falta=
// - se forem diferentes virarem de costas e iguais, ficarem de frente
// - quando terminar, tela de vitória