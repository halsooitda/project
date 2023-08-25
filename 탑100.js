// 전체 재생
document.getElementsByClassName('btn__1')[0].addEventListener('click', ()=>{
    document.getElementById('control-play').click();
})
// 랜덤 재생
document.getElementsByClassName('btn__2')[0].addEventListener('click', ()=>{
    console.log(document.getElementById('control-repeat').title);
    if(document.getElementById('control-repeat').title=='전체 반복'){
        document.getElementById('control-repeat').click();
        document.getElementById('control-repeat').click();
        document.getElementById('control-play').click();
    }else{
        document.getElementById('control-repeat').click();
        document.getElementById('control-repeat').click();
        document.getElementById('control-repeat').click();
        document.getElementById('control-play').click();
    }
})



