// JS: 화면 로드 시 실제 뷰포트 높이를 --vh에 저장
function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
}

// 최초 실행
setVh();

// 화면 회전 등 resize 발생 시에도 높이 갱신
window.addEventListener('resize', setVh);

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

// 모달 버튼 클릭 시 데이터 전달
document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const bank = btn.getAttribute('data-bank');
        const owner = btn.getAttribute('data-owner');
        const account = btn.getAttribute('data-account');

        document.getElementById('modalBank').innerText = "은행: " + bank;
        document.getElementById('modalOwner').innerText = "예금주: " + owner;
        document.getElementById('modalAccount').innerText = "계좌번호: " + account;

        // 모달 띄우기
        $('#accountModal').modal('show');
    });
});

// 모달 안 계좌번호 복사
document.getElementById('copyModalAccount').addEventListener('click', () => {
    const accountText = document.getElementById('modalAccount').innerText.replace("계좌번호: ", "");
    navigator.clipboard.writeText(accountText).then(() => {
        alert("계좌번호가 복사되었습니다!");
    });
});