const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");


setTimeout(() => {
    title1.addEventListener("animationend", () => {
        title1.style.display = "none";
        title2.style.display = "block";
    });
});


function login() {

    const id = document.getElementById("id_u").value;

    const password = document.getElementById("password_u").value;

    if (id === "ezen" && password === "aaaa1111!") {
        // 로그인 후 메인 화면
        swal.fire('홍길동님 환영합니다.','', 'success')
        .then(function(){          
            window.location.href = "./main.html";
        });


    } else {

        // alert("존재하지 않는 회원입니다.");
        swal.fire('존재하지 않는 회원입니다.','', 'error')
        .then(function(){
            window.location.reload();               
        });
    }
  

}

function sign() {
    //회원가입으로 들어가기
    window.location.assign("");

}

function showPassword() {
    let password_v= document.getElementById("password_u");
    let showPasswordBtn = document.getElementById("showPasswordBtn");

    if (password_v.type === "password") {
        password_v.type = "text";
        showPasswordBtn.textContent = "visibility";
    } else {
        password_v.type = "password";
        showPasswordBtn.textContent = "visibility_off";
    }
}