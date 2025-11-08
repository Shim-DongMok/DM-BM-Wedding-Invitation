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


/* 계좌번호 복사 */
const accounts = {
    groom: "신랑 측 계좌번호: 123-4567-8901",
    bride: "신부 측 계좌번호: 987-6543-2101"
};

// 버튼 클릭 시 계좌번호 표시
function showAccount(type) {
    const accountNumber = document.getElementById("accountNumber");
    accountNumber.innerText = accounts[type];
}

// 복사 버튼
function copyAccount(accountId) {
    const accountText = document.getElementById(accountId).innerText;
    navigator.clipboard.writeText(accountText)
        .then(() => alert("계좌번호가 복사되었습니다!"))
        .catch(err => alert("복사 실패: " + err));
}