const { contextBridge } = require('electron');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let currentChoice = 0;

contextBridge.exposeInMainWorld("api", {
    ChangeSong: () => {
        const img = document.getElementById("img");
        if (!img) return; // Prevents errors if the element doesn't exist

        let newChoice;
        do {
            newChoice = randomInt(0, 4);
        } while (newChoice === currentChoice);

        currentChoice = newChoice;
        img.src = `MusicArt/${currentChoice}.gif`;
    }
});
