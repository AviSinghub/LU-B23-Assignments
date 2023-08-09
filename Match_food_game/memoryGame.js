const cardArray = [
    {
        name: 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img : 'images/fries.png'
    },
    {
        name: 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img : 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img : 'images/fries.png'
    },
    {
        name: 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img : 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img : 'images/ice-cream.png'
    }
]
// console.log(cardArray);
cardArray.sort(()=> 0.5 - Math.random());
// console.log(cardArray);

const grid = document.querySelector('#grid');
// console.log(result);

const displayResult = document.querySelector('#results')
let cardsChoosen   = [];
let cardsChoosenId = [];
let cardsWon       = [];

function createBoard(){
    for(let counter = 0; counter < cardArray.length; counter++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',counter);
        // console.log(card,counter+1);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);       // javascript se card 'img' browser/html mai jayega.
    }
}
// function flipcard(){
//     // console.log(cardArray);
//     let cardId = this.getAttribute('data-id');
//     console.log(" cards clicked", cardId); 
//     cardsChoosen.push(cardArray[cardId].name);
//     console.log( "Card Choosen", cardsChoosen);
//     cardsChoosenId.push(cardId);
//     // console.log(this);
//     this.setAttribute('src',cardArray[cardId].img);  //now the images set to display: on flipcard is activated.

//     if(cardsChoosen.length === 2){
//         setTimeout(checkTheMatch,500);
//     }
// }


//check the matching
function checkTheMatch(){
    console.log("Check for match")
    const cards = document.querySelectorAll('img');

    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Sorry! You have clicked on same images. Try sgain!");
        
    }
    else if (cardsChoosen[0] === cardsChoosen[1]){
        alert("Wow! You found a food match")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        
       // this will remove the flipcard feature after the match of two card done 
       // cardsChoosen.splice(0,1);   //bxb
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click',flipcard)

        cardsWon.push(cardsChoosen)
        console.log(cardsWon)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Please try again !")
    }
    cardsChoosen = []
    cardsChoosenId = []

    displayResult.textContent = cardsWon.length

    if( cardsWon.length === cardArray.length/2 ){
        displayResult.textContent = "Congratulation! You Won"
    }
}

// flip the card 
function flipcard(){
    // console.log(cardArray);
    let cardId = this.getAttribute('data-id');
    console.log(" cards clicked", cardId); 
    cardsChoosen.push(cardArray[cardId].name);
    console.log( "Card Choosen", cardsChoosen);
    cardsChoosenId.push(cardId);
    // console.log(this);
    this.setAttribute('src',cardArray[cardId].img);  //now the images set to display: on flipcard is activated.

    if(cardsChoosen.length === 2){
        setTimeout(checkTheMatch,110);
    }
}
createBoard();