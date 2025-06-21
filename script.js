
function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value;
    if (message.trim()) {
        const newMsg = document.createElement("div");
        newMsg.textContent = "الطالب: " + message;
        chatBox.appendChild(newMsg);
        input.value = "";
        setTimeout(() => {
            const reply = document.createElement("div");
            reply.textContent = "رفيق: شكرًا على رسالتك، جاري المعالجة...";
            chatBox.appendChild(reply);
        }, 1000);
    }
}
