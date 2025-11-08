/* 음악 재생 */
const player = document.getElementById("player");
const icon = document.getElementById("music-icon");

function toggleMusic() {
    if (player.paused) {
        player.play().then(() => {
            icon.classList.remove("fa-music");
            icon.classList.add("fa-pause");
        }).catch(err => {
            alert("재생을 위해 화면을 터치해주세요 🎵");
        });
    } else {
        player.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-music");
    }
}

/* 맨 위로 이동 버튼 */
const goToTopBtn = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
});

goToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Fancybox 초기화 */