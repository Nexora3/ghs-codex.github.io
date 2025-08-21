const fileContainer = document.getElementById('files');
fileContainer.innerHTML = `
    <h2>Файлы AI</h2>
    <input type="file" id="fileInput">
    <button onclick="analyzeFile()">Анализировать файл</button>
    <pre id="fileOutput"></pre>
`;

function analyzeFile() {
    const file = document.getElementById('fileInput').files[0];
    if(!file) return alert("Выбери файл!");
    const reader = new FileReader();
    reader.onload = function(e){
        const content = e.target.result;
        document.getElementById('fileOutput').textContent = `Файл: ${file.name}\nСодержимое:\n${content.substring(0, 300)}...`;
    }
    reader.readAsText(file);
}
