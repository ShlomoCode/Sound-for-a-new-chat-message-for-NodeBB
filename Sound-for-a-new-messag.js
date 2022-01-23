function play() {
    var audio = new Audio(
        "https://mitmachim.top/assets/uploads/files/1642875059879-alert.mp3"
    );
    audio.play();
}

socket.on("event:chats.receive", function(data) {
    // DataHook.message.newSet === true &&
    if (data.self === 0) {
        play();
    }
});