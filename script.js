// Nefi Solitaires - Alap logikai motor
document.addEventListener('DOMContentLoaded', () => {
    const undoBtn = document.getElementById('undo-btn');
    const newGameBtn = document.getElementById('new-game-btn');

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

    // Új játék leosztása
    newGameBtn.addEventListener('click', () => {
        const deck = shuffleDeck();
        console.log("Új leosztás kész:", deck);
        // Ide jön majd a kártyák kirajzolása a képernyőre
    });

    // Lépés visszavonása
    undoBtn.addEventListener('click', () => {
        console.log("Utolsó lépés visszavonva.");
        // Ide jön majd a lépéstörténet-kezelő
    });
});
