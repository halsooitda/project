//체크박스 전체선택 메서드
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('agree');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
        /* 이 목록을 forEach 반복문을 사용하여 순회하면서 
        각 체크박스의 checked 값을 'Select All' element의 check 값(selectAll.checked)과 동일하게 변경 */
    })
}

//비밀번호 잘못 입력시 alter창 띄우기 메서드
//입력한 password 받아오기
let password = '';
// document.getElementById('pw').addEventListener('keydown',(e)=>{ //input에 내가 keydown한 모든 객체
//     password += e.key;
//     console.log(password);
// })
function getPW(){
    password = document.getElementById('pw').value;
    console.log(password);
}
//입력한 이름 가져오기
let myName = '';
function getName(){
    myName = document.getElementById('name').value;
    console.log(myName);
}

/*8-20자 이내인지 확인
문자, 숫자, 특수문자 확인*/
function passwordCheck(){
    const REGPASSSWORD = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/;
    const pw = document.getElementById('pw');
    
    if(password.length < 8 || password.length >20) {
        // alert("8이상 20자 이내로 입력해주세요.");
        swal.fire('8이상 20자 이내로 입력해주세요.','', 'error');
        pw.value = '';
        password = ''; //초기화
        return; 
    }else if(!REGPASSSWORD.test(password)){
        // alert("비밀번호는 문자, 숫자,특수문자 포함입니다.");
        swal.fire('비밀번호는 문자, 숫자,특수문자 포함입니다.','', 'error');
        pw.value = '';
        password = ''; //초기화
        return;
    }
    
    //위의 두가지 if에 해당이 안되면 회원가입 완료창 뜨기
    // alert("회원가입이 완료되었습니다.")
    // window.location.href = '/main.html'; //회원가입 완료시 메인화면으로 돌아가기
    swal.fire('회원가입이 완료되었습니다.', myName+"님 환영합니다.",'success')
    .then(function(){
        window.location.href = './main.html';                  
    })

};


//비밀번호 보이게 하기 메서드
function showPassword() {
    let password_v= document.getElementById("pw");
    let showPasswordBtn = document.getElementById("showPasswordBtn");

    if (password_v.type === "password") {
        password_v.type = "text";
        showPasswordBtn.textContent = "visibility";
    } else {
        password_v.type = "password";
        showPasswordBtn.textContent = "visibility_off";
    }
}

