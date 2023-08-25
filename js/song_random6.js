const song_list = [
    document.getElementById("song_list"),
    document.getElementById("song_list1"),
    document.getElementById("song_list2"),
    document.getElementById("song_list3"),
    document.getElementById("song_list4")
];

const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
let title_song = document.getElementById("title_song");
let background_btn = document.getElementById("background_btn")


const random1_song_list = ["어떻게 아직도 이렇게(Nlve)", "타투(적재)", "나란 책(핫펱트, 펀치넬로)", "여름밤에 우린(스탠딩 에크)", "여름날 여름밤(산들)", "넘어와(딘, 백예린)", "널 사랑하면 안돼(딘딘)", "486, 나의 별에게(MJ, 헤일리정)", "Mac Ayres(Easy)", "지난 날 꿈처럼(Just Piano)"];
const random2_song_list = ["Trigger(Hash)", "이뻐?(우리 같은 사람들)", "RUN(더 베인)", "수성의 하루(쏜애플)", "나의 기억(프롬 디 이스트)", "빨간맛(리드벨벳)", "삼각형(러블리즈)", "좋아해도 되나요(f(x))", "회전목마(아이즈원)", "Paper Love(KEENEAT)"];
const random3_song_list = ["너의 하루는 어때?(앤씨아)", "아프지 말고 아프지 말자(우연수)", "위로(권진아)", "홀로(이하이)", "너의 얘길 들어줄게(윤미래)", "위로(권진아)", "마음을 드려요(아이유)", "함께(노을)", "밤바람(앤씨아)", "빛(다이크)"]
const random4_song_list = ["Slow N Slow(Healing)", "똑딱똑딱(푸르른)", "오늘은 왠지...(My Tree)", "함께 가는 길(LAMP)", "하루가 지나면(새벽시간)", "생각이 깊어지는 밤(피아노 모먼트)", "Suddenly(제이 리)", "Refreshing(Healing)", "지나던 그 골목길(Mono Tape)", "Off My Face(Justin Bieber)"];
const random5_song_list = ["그 애(정엽)", "사진 찍어 보내줘(개코)", "집에 갈 때(아거)", "한여름밤의 꿀(산이)", "좋다고 말해(볼빤간사춘기)", "샘김(향기)", "그의바다(백예린)", "좋은걸 뭐 어떡해(데이식스)", "말해! 뭐해?(케이윌)", "Feel Special(트와이스)"]
const random6_song_list = ["눈의 꽃(박효신)", "아시나요(더원)", "이별택시(김연우)", "좋을텐데(성시경)", "그런 사람 또 없습니다.(이승철)", "동경(박효신)", "되돌리다(이승기)", "이별 10분 전(정준영)", "넌 감동이었어(성시경)", "소주한잔(임창정)"]
const random_numbers = new Set();
let table_song = document.getElementById("table_song");

function random_number_f(numbersSet) {
    while (numbersSet.size < 5) {
        let random_number = Math.floor(Math.random() * random1_song_list.length);
        numbersSet.add(random_number);
    }
}

function random1() {
    background_btn.style.backgroundImage = "url('../img/휴식.jpg')";


    title_song.innerHTML = `# 휴식이 필요할 때 플레이리스트`

    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random1_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}

function random2() {
    background_btn.style.backgroundImage = "url('../img/운동.jpg')";
    title_song.innerHTML = `# 에너지가 필요할 때 플레이리스트`
    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random2_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}
function random3() {
    background_btn.style.backgroundImage = "url('../img/위로.jpg')";
    title_song.innerHTML = `# 위로가 필요할 때 플레이리스트`
    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random3_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}
function random4() {
    background_btn.style.backgroundImage = "url('../img/집중.jpg')";
    title_song.innerHTML = `# 집중 할 때 플레이리스트`
    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random4_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}
function random5() {
    background_btn.style.backgroundImage = "url('../img/사랑.png')";
    title_song.innerHTML = `# 사랑할 때 플레이리스트`
    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random5_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}

function random6() {
    background_btn.style.backgroundImage = "url('../img/이별.jpg')";
    title_song.innerHTML = `# 사랑했을 때 플레이리스트`
    random_number_f(random_numbers);
    let i = 0;

    for (const number of random_numbers) {
        song_list[i].innerHTML = `${i + 1}.${random5_song_list[number]}`;
        i++;
    }
    table_song.style.display = "block";
}


function listen_1() {
    let myWindow = window.open("", "mywindow", "width=200, height=300");


}


random6();

setTimeout(() => {
    title1.addEventListener("animationend", () => {
        title1.style.display = "none";
        title2.style.display = "block";
    });
});
