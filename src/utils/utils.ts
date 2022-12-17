export const cardGenerator = () =>{
    const suits =  ['♦','♣','♥','♠'];
    const values = [2,3,4,5,6,7,8,9,10,'K','Q','J','A']
    const cards: Object[] = []

    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            cards.push({
                suit: suits[i],
                value: values[j]
            })
        }
    }

    return cards;
}

// export const randomNumberGenerator = () =>{
//     return Math.floor(Math.random() * 52);
// }

// export const randomCard = () => {
//     const deck = cardGenerator();
//     const randomIndex = randomNumberGenerator();

//     const card = deck[randomIndex];
//     deck.splice(randomIndex, 1);
//     return {card, deck};
// }

export const scoreCalculator = (deck: any) => {
    let score = 0;
    for(let i = 0; i< deck.length; i++){
        if(deck[i].value === 'K' || deck[i].value === 'Q' || deck[i].value === 'J'){
            score = score + 10;
        }
        else if(deck[i].value === 'A'){
            score = score + 11 <= 21 ?  score + 11 : score + 1;
        }
        else{
            score = score + deck[i].value
        }
    }
    return score;
}

export const cardDrawer =(numberOfCards: number, deck: Object[]) => {
    let res = [];

    
    for(let i = 0; i < numberOfCards; i++){
        let randomIndex = Math.floor(Math.random() * deck.length);
        let card = deck.splice(randomIndex, 1)[0];
        res.push(card)
    }
    return res;
}