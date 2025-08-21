const artContainer = document.getElementById('art');
artContainer.innerHTML = `
    <h2>Art AI</h2>
    <input type="text" id="artPrompt" placeholder="Опиши баннер или аватарку">
    <button onclick="generateArt()">Сгенерировать</button>
    <div id="artOutput"></div>
`;

function generateArt() {
    const prompt = document.getElementById('artPrompt').value.trim();
    if(!prompt) return alert("Опиши, что генерируем!");
    const id = generateID();
    document.getElementById('artOutput').innerHTML = `<p>Сгенерировано изображение для: ${prompt} (ID: ${id})</p>`;
}
