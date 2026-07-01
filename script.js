// Nefi Solitaires - Alap logikai motor

document.addEventListener('DOMContentLoaded', () => {
    const undoBtn = document.getElementById('undo-btn');
    const newGameBtn = document.getElementById('new-game-btn');

    // Új játék leosztása
    newGameBtn.addEventListener('click', () => {
        console.log("Új leosztás kezdeményezve...");
        // Ide jön majd a kártyakeverő algoritmus
    });

    // Lépés visszavonása
    undoBtn.addEventListener('click', () => {
        console.log("Utolsó lépés visszavonva.");
        // Ide jön majd a lépéstörténet-kezelő
    });
});
