function listen_1() {
    let myWindow = window.open("../player/aespa_Spicy_.html", "mywindow", "width=440 , height=671");
    // EventTarget = "_blank";
    // window.location.href = "../player/aespa_Spicy_.html"
}
function listen_2() {
    let myWindow = window.open("/project_final/project/player/Jung Kook'Seven'.html", "mywindow", "width=441 , height=671");

}

function listen_3() {
    let myWindow = window.open("/project_final/project/player/NewJeans'Super Shy'.html", "mywindow", "width=441 , height=671");

}
function listen_4() {
    let myWindow = window.open("/project_final/project/player/player_NewJeans'ETA'.html", "mywindow", "width=441 , height=671");

}
const commentList = ["", "", ""];
const addBtn = document.getElementById('add');
const commentInput = document.getElementById('comment');
const commentList_p = document.getElementById('commentList');
addBtn.addEventListener('click', addComment);
function addComment() {
    const comment = commentInput.value.trim();
    if (comment) {
        commentList.push(comment);
        commentInput.value = '';
        showList();

    } else {
        alert("가수에게 응원의 한마디를 작성해주세요:)");
    }
}
function showList() {
    let list = '';
    for (let i = 3; i < commentList.length; i++) {
        list += `<li id="list_css">${i + 1}. ${commentList[i]}<div id="commentList_btn_box"  onclick="removeList(${i})"><span class="close" data-index="${i}">X</span></div></li>`;
    }
    commentList_p.innerHTML = list;
}
function removeList(i) {
    commentList.splice(i, 1);
    showList();
}
function removeList_other() {
    alert("다른 이용자의 댓글은 지울 수 없습니다. :)");


}

function maxlength_f() {

    let input = document.getElementById("comment").value;
    if (input.length > 30) {
        alert("30자까지만 가능합니다.");
    }
}
function clear1() {
    const confirmation = confirm("작성하신 내용을 삭제하시겠습니까??");
    if (confirmation) {
        commentInput.value = "";
    }
}