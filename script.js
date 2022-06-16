let cards = prompt('Com quantas cartas quer jogar? Escolha de 4 a 14');
let cardsNumber = parseInt(cards)
if(cardsNumber%2 != 0 && cardsNumber != Number || cardsNumber == 2 || cardsNumber > 14){
    alert("Para jogar, é nescessário no mínimo 4 cartas e no máximo 14!")
    alert("Atualize a página e tente novamente!")
}
else{
    counter = 0
    while(counter < cardsNumber){
        let cardsZone = document.querySelector('.cardsZone');
        cardsZone.innerHTML += `
        <div class="cardArea" onclick="flipCard(this)">
            <img src="/img/front.png" alt="parrotImg" class="parrotImg">
        </div>
        `;
        counter += 1;
    }

    function flipCard(element){
        element.classList.toggle('flip')
    }
}