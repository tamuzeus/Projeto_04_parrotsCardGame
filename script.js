
//Capturar numero de cards
let cards = prompt('Com quantas cartas quer jogar? Escolha de 4 a 14 cartas:');
let cardsNumber = parseInt(cards);
let numberClick= 0;
let numberCorrects = 0;
//Arrays
const frontCardsArray = ['unicornparrot.gif', 'tripletsparrot.gif', 'revertitparrot.gif', 'metalparrot.gif', 'fiestaparrot.gif', 'explodyparrot.gif', 'bobrossparrot.gif'];

///Condicional para negar/começar jogo

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

let cardSelected
let lockedBoard = false;
function flipCard(element){  
    if(!lockedBoard){
        element.classList.add('flip')
        numberClick += 1
        if(cardSelected != null){
            if(cardSelected != element){
                lockedBoard = true;
                matchCards(cardSelected, element)
            }
        }
        else{
            cardSelected = element;
        }
    }
}
//cardselect armazena a primeira info -- indica que ja possui uma carta virada
//element armazena a segunda info

function matchCards(img1, img2){
    cardSelected = null
    if(img1.querySelector('.front-face .parrotImg').src === img2.querySelector('.front-face .parrotImg').src){
        lockedBoard = false;
        img1.removeAttribute("onclick")
        img2.removeAttribute("onclick")
        numberCorrects += 2
        if(numberCorrects === cardsNumber){
            setTimeout(() => {
                alert(`Você venceu!\nConseguiu achar todos os pares das ${cardsNumber} cartas!\nPrecisou realizar ${numberClick} viradas de cartas para vencer!`)
                playAgain()
            }, 1500)
        } 
    }

    else{
        setTimeout(() => {
            img1.classList.remove('flip')
            img2.classList.remove('flip')
            lockedBoard = false;
        }, 1000)
    }
    
}

let repeat;
function playAgain(){
    let repeat = prompt('Quer jogar novamente? Digite: "S" ou "N"').toUpperCase()
    if(repeat === 'S'){
        window.location.reload()
    }
    else if(repeat === 'N'){
        alert('Sem problemas! Até a próxima!')
    }

    else if(repeat != 'S' || repeat != 'N'){
        while(repeat != 'S' || repeat != 'N'){
            repeat = prompt('Quer jogar novamente? Digite: "S" ou "N"').toUpperCase()
            if(repeat === 'S' || repeat === "N"){
                if(repeat === 'S'){
                    window.location.reload()
                    break
                }
                else if(repeat === 'N'){
                    alert('Sem problemas! Até a próxima!\nAproveite a vista dos pássaros dançantes DW!')
                    break
                }
            }
        }
    }

   
}