function clickAnswer(){
    clickAnswer1();
    clickAnswer2();
}
function clickAnswer1(){
    document.getElementsByClassName('answer1')[0].addEventListener('click', ()=>{
        answer1();
        answer11();
    })
}
function clickAnswer2(){
    document.getElementsByClassName('answer2')[0].addEventListener('click', ()=>{
        answer2();
    }
)}

function clickAnswer3(){
    document.getElementsByClassName('answer3')[0].addEventListener('click', ()=>{
        answer3();
    }
)}
function clickAnswer4(){
    document.getElementsByClassName('answer4')[0].addEventListener('click', ()=>{
        answer4();
    }
)}
function clickAnswer5(){
    document.getElementsByClassName('answer5')[0].addEventListener('click', ()=>{
        answer5();
    }
)}
function clickAnswer6(){
    document.getElementsByClassName('answer6')[0].addEventListener('click', ()=>{
        answer6();
    }
)}

function answer1(){
    let b = document.getElementsByClassName('answer2')[0];
    b.classList.add('none');
}
function answer11(){
    document.getElementById('answer').outerHTML += `<p class="answer6" id="question">4. 그 외</p>`;
    document.getElementById('answer').outerHTML += `<p class="answer5" id="question">3. 구독 해지 불가 안내</p>`;
    document.getElementById('answer').outerHTML += `<p class="answer4" id="question">2. 결제 정보 변경 방법</p>`;
    document.getElementById('answer').outerHTML += `<p class="answer3" id="question">1. 멤버십 구독 안내</p>`;
    clickAnswer3();
    clickAnswer4();
    clickAnswer5();
    clickAnswer6();
}

function answer2(){
    let b = document.getElementsByClassName('answer1')[0];
    b.classList.add('none');
    document.getElementsByClassName('answer2')[0].outerHTML += `<div id="ALLanswer"><a href="./문의사항.html">이메일 문의 주소</a></div>`;
    document.getElementsByClassName('answer2')[0].outerHTML += `<p>이메일 문의 이용시 빠르게 <br>처리해드리겠습니다.</p>`;
}

function answer3(){
    answer3456(3);
    document.getElementById('question').outerHTML += `<div id="ALLanswer"><a href="../project/membership/membership.html">멤버십 사이트 주소</a></div>`;
    document.getElementById('question').outerHTML += `<div id="answer">멤버십 사이트 연결</div>`;
}
function answer4(){
    answer3456(4);
    document.getElementsByClassName('answer4')[0].outerHTML += `<div id="ALLanswer">결제 정보 변경 불가능하십니다^^</div>`;
}

function answer5(){
    answer3456(5);
    document.getElementsByClassName('answer5')[0].outerHTML += `<div id="ALLanswer">
    <pre>✅ 구독해지(정기결제 해지)
    ◾ 현재 이용 중인 회차의 남은 권리까지 
      사용하고 종료할 경우
    
✅ 즉시종료(결제취소·환불)
    ◾ 현재 이용 중인 회차를 즉시 사용 
      종료하고 결제 취소· 환불할 경우</pre></div>`;
}
function answer6(){
    answer3456(6);
    document.getElementsByClassName('answer6')[0].outerHTML += `<div id="ALLanswer"><a href="./문의사항.html">이메일 문의 주소</a></div>`;
    document.getElementsByClassName('answer6')[0].outerHTML += `<p>이메일 문의 이용시 빠르게 <br>처리해드리겠습니다.</p>`;
}

function answer3456(num){
    for(let i=3; i<7; i++){
        let c = `answer${num}`;
        if(num!=i){
            document.getElementsByClassName(`answer${i}`)[0].classList.add('none');
        }
    }
}