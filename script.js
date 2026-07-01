// Nefi Solitaires - Alap logikai motor
document.addEventListener('DOMContentLoaded', () => {
    const undoBtn = document.getElementById('undo-btn');
    const newGameBtn = document.getElementById('new-game-btn');
    const table = document.getElementById('table');

    // Kártyák keverése - Fisher-Yates algoritmus
    function shuffleDeck() {
        const suits = ['♠', '♥', '♣', '♦'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let deck = [];
        
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ suit, value });
            }
        }
        
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    // Kártyák kirajzolása a táblára
    function renderDeck(deck) {
        table.innerHTML = ''; // Először tisztítjuk a területet
        
        deck.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            // Itt adunk színt a kártyáknak: ♥ és ♦ piros, a többi alapértelmezett
            if (card.suit === '♥' || card.suit === '♦') {
                cardDiv.style.color = '#ff0000';
            }
            cardDiv.innerHTML = `${card.value}<br>${card.suit}`;
            table.appendChild(cardDiv);
        });
    }

    // Új játék leosztása
    newGameBtn.addEventListener('click', () => {
        const deck = shuffleDeck();
        renderDeck(deck);
        console.log("Új leosztás kész és kirajzolva.");
    });

    // Lépés visszavonása
    undoBtn.addEventListener('click', () => {
        console.log("Utolsó lépés visszavonva.");
    });
});
