// Nefi Solitaires - Mátrix Labor (Véglegesített logika)
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');
    const newGameBtn = document.getElementById('new-game-btn');

    function shuffleDeck() {
        const suits = ['♠', '♥', '♣', '♦'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let deck = [];
        suits.forEach(suit => {
            values.forEach(value => deck.push({ suit, value }));
        });
        // Fisher-Yates keverés
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    function renderDeck(deck) {
        table.innerHTML = '';
        const columns = Array.from({ length: 7 }, () => []);
        
        // Kártyák kiosztása 7 oszlopba
        deck.slice(0, 28).forEach((card, index) => {
            columns[index % 7].push(card);
        });

        columns.forEach(col => {
            const colDiv = document.createElement('div');
            colDiv.className = 'tableau-column';
            col.forEach((card, index) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card';
                cardEl.style.zIndex = index; // Rétegezés
                cardEl.style.marginTop = index === 0 ? '0' : '-50px'; // Az "átlapolás" trükkje
                cardEl.innerHTML = `${card.value} ${card.suit}`;
                if (card.suit === '♥' || card.suit === '♦') cardEl.classList.add('red');
                colDiv.appendChild(cardEl);
            });
            table.appendChild(colDiv);
        });
    }

    newGameBtn.addEventListener('click', () => renderDeck(shuffleDeck()));
});
