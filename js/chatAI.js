const chatContainer = document.getElementById('chat');
chatContainer.innerHTML = `
    <h2>Chat AI</h2>
    <div id="chatBox" class="chat-box"></div>
    <input type="text" id="chatInput" placeholder="Напиши что-нибудь...">
    <button onclick="sendMessage()">Отправить</button>
`;

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if(!message) return;
    showMessage(document.getElementById('chatBox'), `Ты: ${message}`);
    let reply = `AI: Я обработал твоё сообщение: "${message}"`;
    showMessage(document.getElementById('chatBox'), reply);
    input.value = '';
}
