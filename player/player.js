// 비디오 트랙 제어 부분 시작
function initTTML() {
    // 자막을 렌더링할 요소와 비디오 요소 등을 가져옵니다.
    let renderDiv = document.getElementById("render-div");
    let myVideo = document.getElementById("imscVideo");
    let myTrack = myVideo.textTracks[0];
    let ttmlUrl = myVideo.getElementsByTagName("track")[0].src;

    myTrack.mode = "hidden";

    // XMLHttpRequest를 사용하여 자막 파일을 가져옵니다.
    let client = new XMLHttpRequest();

    client.open("GET", ttmlUrl);
    client.onreadystatechange = function () {
        initTrack(client.responseText);
    };
    client.send();

    // 자막 초기화 함수
    function initTrack(text) {
        let imscDoc = imsc.fromXML(text);
        let timeEvents = imscDoc.getMediaTimeEvents();
        // 타임 이벤트마다 자막을 생성하고 렌더링합니다.
        for (let i = 0; i < timeEvents.length; i++) {
            let Cue = window.VTTCue || window.TextTrackCue; // Edge/IE와 다른 브라우저의 차이를 고려하여 Cue 생성
            if (i < timeEvents.length - 1) {
                // 마지막 이벤트가 아니면 빈 문자열을 VTTText로 제공
                var myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
            } else {
                /*
                마지막 "imsc event"의 "End" 시간은 비디오의 끝입니다.
                */
                let myCue = new Cue(timeEvents[i], myVideo.duration, "");
            }
            // 자막이 화면에 나타날 때의 동작 정의
            myCue.onenter = function () {
                clearSubFromScreen(); // 화면에서 자막을 지웁니다.
                let myIsd = imsc.generateISD(imscDoc, this.startTime);
                imsc.renderHTML(myIsd, renderDiv); // ISD를 생성하여 렌더링합니다.
            };
            // 자막이 화면에서 사라질 때의 동작 정의
            myCue.onexit = function () {
                clearSubFromScreen(); // 화면에서 자막을 지웁니다.
            };
            let r = myTrack.addCue(myCue); // 자막을 트랙에 추가합니다.
        }
    }
    // 화면에서 자막을 지우는 함수
    function clearSubFromScreen() {
        let subtitleActive = renderDiv.getElementsByTagName("div")[0];
        if (subtitleActive) {
            renderDiv.removeChild(subtitleActive); // 자막을 화면에서 제거합니다.
        }
    }
}

// 페이지가 로드되면 자막을 초기화
window.addEventListener("load", initTTML);

// DOM 요소들을 가져옵니다.
const wrapper = document.querySelector(".wrapper"),
    playPauseBtn = wrapper.querySelector("#play-pause"),
    mainAudio = wrapper.querySelector("#imscVideo"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar");

// 마지막 재생 시간을 저장할 변수를 초기화합니다.
let lastPlayTime = 0;

playPauseBtn.addEventListener("click", (e) => {
    console.log(mainAudio.currentTime);
    if (mainAudio.paused) {
        if (lastPlayTime == 0) {
            console.log(lastPlayTime);
            mainAudio.currentTime = lastPlayTime;
        } else {
            console.log(lastPlayTime);
            mainAudio.currentTime = 0;
        }
        mainAudio.play();
        console.log(lastPlayTime);
    } else {
        console.log(lastPlayTime);
        mainAudio.pause();
        lastPlayTime = mainAudio.currentTime; // 정지할 때 재생 위치를 저장합니다.
    }
});

// 비디오의 재생 시간이 업데이트되면 프로그레스 바를 업데이트합니다.
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; // 재생 중인 시간을 가져옵니다.
    const duration = e.target.duration; // 전체 재생 시간을 가져옵니다.
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {
        // 음악 현재 시간 및 전체 재생 시간 업데이트
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) {
            //초가 10보다 작으면 0추가해서 01 02...
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    // 재생 중인 노래의 현재 시간을 업데이트합니다
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// 프로그레스 바를 클릭하면 해당 위치로 재생 시간을 이동시킵니다.
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth; // 프로그레스 바의 너비를 가져옵니다.
    let clickedOffsetX = e.offsetX; // 클릭한 위치의 x 오프셋 값을 가져옵니다.
    let songDuration = mainAudio.duration; // 곡의 전체 재생 시간을 가져옵니다.

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
});

//button 클릭시 히든메뉴
function toggleHiddenMenu() {
    const hiddenMenu = document.querySelector(".hidden_menu");
    hiddenMenu.classList.toggle("show");
}

//아이콘 하트 클릭시 색 변경
document.getElementById("toggleHeart").addEventListener("click", () => {
    const heartIcon = document.querySelector("#toggleHeart i");
    heartIcon.classList.toggle("heartColor");
});

//이용권 구매버튼 클릭시 새창 팝업
function popup_buy() {
    var popup = window.open(
        "../membership/membership.html",
        "멤버십페이지",
        "height=" + screen.height + ",width=" + screen.width + "fullscreen=yes"
    );
}
