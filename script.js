let cards = prompt('Com quantas cartas quer jogar?');
let cardsNumber = parseInt(cards)

if(cardsNumber%2 != 0 && cardsNumber != Number){
    alert("Para jogar, é nescessário digitar o numero de cartas pares!")
    alert("Atualize a página e tente novamente!")
}

else{
    counter = 0
    while(counter < cardsNumber){
        let cardsZone = document.querySelector('.cardsZone');
        cardsZone.innerHTML += `
        <div class="cardArea">
            <img src="/img/front.png" alt="parrotImg" class="parrotImg">
        </div>
        `;
        counter += 1;
    }
}