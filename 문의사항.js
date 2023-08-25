function submitBtn(){
  swal.fire('접수가 완료되었습니다.','', 'success');  
}

// 이메일 직접 입력
function changeEmailList() {
  let v = document.actionForm.email.value;

  if (v == '1') {
      document.actionForm.email2.value = "";
      document.actionForm.email2.style.display = '';
      document.actionForm.email2.focus();
  }
  else if (v == '0') {
      document.actionForm.email2.style.display = 'none';
      document.actionForm.email2.value = "";
  }
  else {
      document.actionForm.email2.value = v;
      document.actionForm.email2.style.display = 'none';
  }
}