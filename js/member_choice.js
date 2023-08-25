function listen_1() {
    let myWindow = window.open(
        "/project_final/project/player/IVE'I%20AM'.html",
        "mywindow",
        "width=441 , height=671"
    );
}
function listen_2() {
    let myWindow = window.open(
        "/project_final/project/player/Jung Kook'Seven'.html",
        "mywindow",
        "width=441 , height=671"
    );
}

function listen_3() {
    let myWindow = window.open(
        "/project_final/project/player/NewJeans'Super Shy'.html",
        "mywindow",
        "width=441 , height=671"
    );
}
function listen_4() {
    let myWindow = window.open(
        "/project_final/project/player/player_NewJeans'ETA'.html",
        "mywindow",
        "width=441 , height=671"
    );
}
const commentList = ["", "", ""];
const addBtn = document.getElementById("add");
const commentInput = document.getElementById("comment");
const commentList_p = document.getElementById("commentList");
addBtn.addEventListener("click", addComment);
function addComment() {
    const comment = commentInput.value.trim();
    if (comment) {
        commentList.push(comment);
        commentInput.value = "";
        showList();
    } else {
        alert("음악 추천에 대한 감상평을 작성해주세요:)");
    }
}
function showList() {
    let list = "";
    for (let i = 3; i < commentList.length; i++) {
        list += `<li id="list_css">${i + 1}. ${
            commentList[i]
        }<div id="commentList_btn_box"  onclick="removeList(${i})"><span class="close" data-index="${i}">X</span></div></li>`;
    }
    commentList_p.innerHTML = list;
}
function removeList(i) {
    commentList.splice(i, 1);
    showList();
}
function removeList_other() {
    alert("다른 이용자의 댓글은 지울 수 없어요:)");
}

function maxlength_f() {
    let input = document.getElementById("comment").value;
    if (input.length > 30) {
        alert("30자만 가능해요.");
    }
}
function clear1() {
    const confirmation = confirm("작성하신 내용을 삭제하시겠습니까??");
    if (confirmation) {
        commentInput.value = "";
    }
}
function changeBackgroundImage1() {
    document.getElementsByClassName("commend")[0].classList.add("commend_btn1");
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn2");
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn3");
}

function changeBackgroundImage2() {
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn1");
    document.getElementsByClassName("commend")[0].classList.add("commend_btn2");
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn3");
}
function changeBackgroundImage3() {
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn1");
    document
        .getElementsByClassName("commend")[0]
        .classList.remove("commend_btn2");
    document.getElementsByClassName("commend")[0].classList.add("commend_btn3");
}
const commentList1 = ["Too Good", "bitter pill", "losing you"];
let commend_list = document.getElementById("commend_list");
const commend_bg = document.getElementById("commend_bg");

function btn1() {
    changeBackgroundImage1();
    let list = "";
    for (let i = 0; i < commentList1.length; i++) {
        list += `<li class="list_e">${i + 1}. ${
            commentList1[i]
        }<button id="play_button_com" onclick="rotateCd()">노래듣기</button><button id="stop_button" onclick="rotateCd()">노래끄기</button></li>`;
    }
    commend_list.innerHTML = list;
}
const commentList2 = ["Chandelier", " Helium", "The Greatest"];

function btn2() {
    changeBackgroundImage2();
    let list = "";
    for (let i = 0; i < commentList2.length; i++) {
        list += `<li class="list_e">${i + 1}. ${
            commentList2[i]
        }<button id="play_button_com" onclick="rotateCd()">노래듣기</button><button id="stop_button" onclick="rotateCd()">노래끄기</button></li>`;
    }
    commend_list.innerHTML = list;
}
const commentList3 = ["Treasure", "24k magic", "runaway baby"];

function btn3() {
    changeBackgroundImage3();
    let list = "";
    for (let i = 0; i < commentList3.length; i++) {
        list += `<li class="list_e">${i + 1}. ${
            commentList3[i]
        }<button id="play_button_com" onclick="rotateCd()">노래듣기</button><button id="stop_button" onclick="rotateCd()">노래끄기</button></li>`;
    }
    commend_list.innerHTML = list;
}
btn1();

let rotating = false;
let timer;

function rotateCd() {
    let cd_img = document.getElementById("cd_img");
    let playButton = document.getElementById("play_button_com");
    let stopButton = document.getElementById("stop_button");
    let rotationAngle = 0;

    if (!rotating) {
        rotating = true;
        playButton.style.display = "none";
        stopButton.style.display = "block";

        timer = setInterval(function () {
            rotationAngle += 10;
            cd_img.style.transform = `rotate(${rotationAngle}deg)`;
        }, 50);
    } else {
        clearInterval(timer);
        rotating = false;
        stopButton.style.display = "none";
        playButton.style.display = "block";
    }
}
