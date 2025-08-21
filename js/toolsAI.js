const toolsContainer = document.getElementById('tools');
toolsContainer.innerHTML = `
    <h2>RP / Tools AI</h2>
    <textarea id="toolsPrompt" placeholder="Опиши материал..." rows="3"></textarea>
    <button onclick="generateTools()">Создать</button>
    <pre id="toolsOutput"></pre>
`;

function generateTools() {
    const prompt = document.getElementById('toolsPrompt').value.trim();
    if(!prompt) return alert("Опиши материал!");
    const material = `RP-Материал по описанию: "${prompt}"\n- Элемент 1\n- Элемент 2\n- Элемент 3`;
    document.getElementById('toolsOutput').textContent = material;
}
