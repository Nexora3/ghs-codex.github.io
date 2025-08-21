const codeContainer = document.getElementById('code');
codeContainer.innerHTML = `
    <h2>Code AI</h2>
    <textarea id="codePrompt" placeholder="Опиши код, который нужен..." rows="4"></textarea>
    <button onclick="generateCode()">Сгенерировать код</button>
    <pre id="codeOutput"></pre>
`;

function generateCode() {
    const prompt = document.getElementById('codePrompt').value.trim();
    if(!prompt) return alert("Опиши код!");
    const code = `// Код по твоему описанию:\n// ${prompt}\nconsole.log("Пример кода");`;
    document.getElementById('codeOutput').textContent = code;
}
