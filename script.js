document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');
    const newGameBtn = document.getElementById('new-game-btn');

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
        table.innerHTML = '';
        const columns = Array.from({ length: 7 }, () => []);
        deck.slice(0, 28).forEach((card, index) => columns[index % 7].push(card));

        columns.forEach(col => {
            const colDiv = document.createElement('div');
            colDiv.className = 'tableau-column';
            col.forEach((card, index) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card';
                // Ezzel a 3 sorral kényszerítjük ki a lépcsőzést:
                cardEl.style.position = 'absolute';
                cardEl.style.left = '0';
                cardEl.style.top = (index * 25) + 'px'; 
                cardEl.style.zIndex = index;
                
                cardEl.innerHTML = `${card.value}<br>${card.suit}`;
                if (card.suit === '♥' || card.suit === '♦') cardEl.classList.add('red');
                colDiv.appendChild(cardEl);
            });
            table.appendChild(colDiv);
        });
    }

    newGameBtn.addEventListener('click', () => renderDeck(shuffleDeck()));
});
