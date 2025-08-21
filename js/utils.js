function generateID(length = 8) {
    return Math.random().toString(36).substr(2, length);
}

function showMessage(container, message) {
    container.innerHTML += `<p>${message}</p>`;
    container.scrollTop = container.scrollHeight;
}
