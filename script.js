document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");

    const playBtn = document.getElementById('play-btn');
    const bgMusic = document.getElementById('bg-music');
    const greetingText = document.getElementById('greeting-text');

    const messages = [
        "Chúc Mickey một ngày 20-10 thật hạnh phúc",
        "luôn xinh đẹp",
        "rạng rỡ và ngập tràn yêu thương",
        "Cảm ơn Mickey đã luôn bên Sun",
        "làm mỗi ngày thêm đáng nhớ"
    ];

    const messageStartIcons = ["❤️", "⭐", "💎", "🌞", "💐"];
    const messageEndIcons = ["❤️", "⭐", "💎", "🌞", "💐"];

    function showMessages() {
        let index = 0;

        function showNextMessage() {
            if (index >= messages.length) return;

            greetingText.style.opacity = 0;
            greetingText.classList.remove("animate");

            setTimeout(() => {
                greetingText.innerHTML = `
    <span class="icon">${messageStartIcons[index]}</span>
    <span class="text">${messages[index]}</span>
    <span class="icon">${messageEndIcons[index]}</span>
`;
                greetingText.style.opacity = 1;
                greetingText.classList.add("animate");

                index++;
                if (index < messages.length) {
                    setTimeout(showNextMessage, 3000);
                } else {
                    setTimeout(() => {
                        greetingText.style.opacity = 0;
                    }, 3000);
                }
            }, 500);
        }

        showNextMessage();
    }


    playBtn.addEventListener('click', () => {
        // Phát nhạc
        bgMusic.play().catch(err => console.log("Không thể tự phát nhạc:", err));

        // Hiển thị lời chúc sau 5 giây
        setTimeout(() => {
            showMessages();
        }, 5000); // 5000ms = 5s

        // Ẩn nút sau khi bấm
        playBtn.style.display = 'none';
    });
});
