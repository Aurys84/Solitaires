document.addEventListener('DOMContentLoaded', () => {
    const newGameBtn = document.getElementById('new-game-btn');
    const table = document.getElementById('table');

    function shuffleDeck() {
        const suits = ['♠', '♥', '♣', '♦'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let deck = [];
        suits.forEach(suit => values.forEach(value => deck.push({ suit, value })));
        
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    function renderDeck(deck) {
        table.innerHTML = ''; // Törli a régi játékot
        
        // 7 oszlop létrehozása
        const columns = Array.from({ length: 7 }, () => []);
        deck.slice(0, 28).forEach((card, index) => {
            columns[index % 7].push(card);
        });

        columns.forEach(col => {
            const colDiv = document.createElement('div');
            colDiv.className = 'tableau-column'; // Ez köti össze a CSS-el
            
            col.forEach((card, cardIndex) => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                cardDiv.style.zIndex = cardIndex; // Az átlapoláshoz
                
                if (card.suit === '♥' || card.suit === '♦') {
                    cardDiv.style.color = '#ff0000';
                }
                cardDiv.innerHTML = `${card.value}<br>${card.suit}`;
                colDiv.appendChild(cardDiv);
            });
            table.appendChild(colDiv);
        });
    }

    newGameBtn.addEventListener('click', () => renderDeck(shuffleDeck()));
});
