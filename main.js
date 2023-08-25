function alert(){
    swal.fire('로그인 후 이용해주세요.',"",'error')
    .then(function(){
        window.location.href = './main.html';                  
    })
}