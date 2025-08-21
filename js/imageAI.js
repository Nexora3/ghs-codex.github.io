const imageContainer = document.getElementById('images');
imageContainer.innerHTML = `
    <h2>Скрины AI</h2>
    <input type="file" id="imageInput" accept="image/*">
    <button onclick="analyzeImage()">Анализировать скрин</button>
    <div id="imageOutput"></div>
`;

function analyzeImage() {
    const file = document.getElementById('imageInput').files[0];
    if(!file) return alert("Выбери изображение!");
    const url = URL.createObjectURL(file);
    document.getElementById('imageOutput').innerHTML = `<p>AI анализирует скрин: ${file.name}</p><img src="${url}" width="300">`;
}
