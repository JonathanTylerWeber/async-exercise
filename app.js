// number facts
// 1*************

// async function getNum() {
//     let baseURL = 'http://numbersapi.com/42';
//     let p1 = await axios.get(baseURL, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     },
//     );
//     console.log(p1);
// }

// 2*************
// let ul = document.querySelector('ul');
// let baseURL = 'http://numbersapi.com/';

// async function getNums() {
//     try {
//         let nums = await Promise.all([
//             axios.get(`${baseURL}1`),
//             axios.get(`${baseURL}2`),
//             axios.get(`${baseURL}3`),
//             axios.get(`${baseURL}4`),
//         ]);

//         for (let response of nums) {
//             let listItem = document.createElement('li');
//             listItem.textContent = response.data;
//             ul.append(listItem);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// getNums();


// 3*************
// let ul = document.querySelector('ul');
// let baseURL = 'http://numbersapi.com/';

// async function getNums() {
//     try {
//         let nums = await Promise.all([
//             axios.get(`${baseURL}1`),
//             axios.get(`${baseURL}1`),
//             axios.get(`${baseURL}1`),
//             axios.get(`${baseURL}1`),
//         ]);

//         for (let response of nums) {
//             let listItem = document.createElement('li');
//             listItem.textContent = response.data;
//             ul.append(listItem);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// getNums();



// deck of cards
// 1*************
// const deck = {
//     async drawCard() {
//         try {
//             const initRes = await axios.get('https://deckofcardsapi.com/api/deck/new/');
//             this.deckId = initRes.data.deck_id;

//             const shuffleRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);

//             const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);

//             console.log(`${drawRes.data.cards[0].value} of ${drawRes.data.cards[0].suit}`);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     },
// };

// deck.drawCard();


// 2*************
// const deck = {
//     async drawTwoCards() {
//         try {
//             const initRes = await axios.get('https://deckofcardsapi.com/api/deck/new/');
//             this.deckId = initRes.data.deck_id;

//             const shuffleRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);

//             const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`);

//             let cards = [];
//             for (let cardData of drawRes.data.cards) {
//                 cards.push(`${cardData.value} of ${cardData.suit}`);
//             }

//             console.log(`${cards[0]}, ${cards[1]}`);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     },
// };

// deck.drawTwoCards();



// 3*************
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

const deck = {
    async initialize() {
        try {
            const initRes = await axios.get('https://deckofcardsapi.com/api/deck/new/');
            this.deckId = initRes.data.deck_id;

            const shuffleRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);
            console.log('Deck initialized and shuffled.');
        } catch (error) {
            console.error('Error initializing the deck:', error);
        }
    },

    async drawCard() {
        try {
            const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
            return `${drawRes.data.cards[0].value} of ${drawRes.data.cards[0].suit}`;
        } catch (error) {
            console.error('Error drawing a card:', error);
        }
    },
};

btn.addEventListener('click', async () => {
    let card = await deck.drawCard()
    try {
        let listItem = document.createElement('li');
        listItem.textContent = card;
        ul.append(listItem);
    }
    catch (err) {
        console.log("Error:", err);
    };
});

deck.initialize();

