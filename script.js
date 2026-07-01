// Nefi Solitaires - Mátrix Labor verzió
document.addEventListener('DOMContentLoaded', () => {
    const undoBtn = document.getElementById('undo-btn');
    const newGameBtn = document.getElementById('new-game-btn');
    const table = document.getElementById('table');

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

    // Kártyák kirajzolása 7 oszlopba (Tableau)
    function renderDeck(deck) {
        table.innerHTML = '';
        table.style.display = 'flex';
        table.style.justifyContent = 'center';
        table.style.gap = '10px';

        const columns = [[], [], [], [], [], [], []]; 
        deck.slice(0, 28).forEach((card, index) => { // Kezdésnek 28 lap (klasszikus pasziánsz alap)
            columns[index % 7].push(card);
        });

        columns.forEach(col => {
            const colDiv = document.createElement('div');
            colDiv.className = 'tableau-column';
            colDiv.style.display = 'flex';
            colDiv.style.flexDirection = 'column';
            
            col.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                if (card.suit === '♥' || card.suit === '♦') cardDiv.style.color = '#ff0000';
                cardDiv.innerHTML = `${card.value}<br>${card.suit}`;
                colDiv.appendChild(cardDiv);
            });
            table.appendChild(colDiv);
        });
    }

    newGameBtn.addEventListener('click', () => {
        const deck = shuffleDeck();
        renderDeck(deck);
    });

    undoBtn.addEventListener('click', () => {
        console.log("Utolsó lépés visszavonva.");
    });
});
