// let name = document.getElementById('name').value;
// let dateOfBirth = document.getElementById('dateOfBirth').value;
// let sex = document.getElementById('sex').value;
// let phone = document.getElementById('phone').value;
// let address = document.getElementById('address').value;
// let password = document.getElementById('password').value;
// let passwordAgain = document.getElementById('passwordAgain');
// let email = document.getElementById('email').value;
// let gridCheck0 = document.getElementById('gridCheck0').value;
// let gridCheck1 = document.getElementById('gridCheck1').value;
// let gridCheck2 = document.getElementById('gridCheck2').value;

function check () {
let name = document.getElementById('name').value;
let dateOfBirth = document.getElementById('dateOfBirth').value;
let sex = document.getElementById('sex').value;
let phone = document.getElementById('phone').value;
let address = document.getElementById('address').value;
let password = document.getElementById('password').value;
let passwordAgain = document.getElementById('passwordAgain').value;
let email = document.getElementById('email').value;
let gridCheck0 = document.getElementById('gridCheck0').value;
let gridCheck1 = document.getElementById('gridCheck1').value;
let gridCheck2 = document.getElementById('gridCheck2').value;
  if(name.length ===0){
    alert("Tên là bắt buộc")
    return 0;
  } else if (phone.length === 0){
    alert("Số điện thoại là bắt buộc")
    return 0;
  } else if (password.length === 0){
    alert("Bạn phải nhập vào mật khẩu")
    return 0;
  }
  else if(passwordAgain.length ===0){
    alert("Trường xác nhận mật khẩu không được để trông")
    return 0;
  } else if (email.length === 0){
    alert("Email không được để trống")
    return 0;
  } else if(passwordAgain != password){
    alert("Mật khẩu không khớp")
    return 0;
  }
  if(email.split('@').length === 1){
    alert("Email không đúng định dạng")
    return 0;
  }
  let regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  
  if(!regex.test(password)){
    alert("Mật khẩu không đúng định dạng")
    return 0;
  }

  alert("Thành Công")
}