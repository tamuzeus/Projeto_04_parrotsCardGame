
//Capturar numero
let cards = prompt('Com quantas cartas quer jogar? Escolha de 4 a 14');
let cardsNumber = parseInt(cards);

//Arrays
let cardsArray = [];
let frontCardsArray = ['unicornparrot.gif', 'tripletsparrot.gif', 'revertitparrot.gif', 'metalparrot.gif', 'fiestaparrot.gif', 'explodyparrot.gif', 'bobrossparrot.gif'];

///Condicional para negar jogo
if(cardsNumber%2 != 0 && cardsNumber != Number || cardsNumber == 2 || cardsNumber > 14){
    alert("Para jogar, é nescessário no mínimo 4 cartas e no máximo 14! \nAtualize a página e tente novamente!")
}


//Condicional para iniciar jogo
else{
    counter = 0
    while(counter < cardsNumber){ //Se o contador for menor que o número de cards
        cardsArray.push(cardsNumber[counter]) //vai dar push para abrir a quantidade de espaços para cards
        frontCardsArray.sort(() => Math.random() - 0.5) //randomizar o array
        cardsArray[counter] = `
        <div class="cardArea" onclick="flipCard(this)">

            <div class="back-face face">
                <img src="/img/front.png" alt="parrotImg" class="parrotImg">
            </div>

            <div class="front-face face">
                <img src="/img/${frontCardsArray[counter]}" class="parrotImg">
            </div>
        </div>
        `   //A div vai ser adicionada a cada espaço

        let cardsZone = document.querySelector('.cardsZone'); 
        cardsZone.innerHTML += cardsArray[counter] //adicionando as divs dos arrays no html
        counter ++; //aumentando o contador
    }

    function flipCard(element){
        element.classList.toggle('flip') //flip da carta
}
}

//falta=
// - Fazer aparecer apenas 2 de cada gif nos cartões
// - randomizar cartões de acordo com suas posições
// - se forem diferentes virarem de costas e iguais, ficarem de frente
// - quando terminar, tela de vitória