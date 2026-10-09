// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================



function pageLoad() {
  const form = document.getElementById("myRegister");
  if (form) {
    form.onsubmit = validateForm;
  }
}

function validateForm(event) {
  const errorMsg = document.getElementById("errormsg");
  const username = document.forms["myRegister"]["username"].value.trim();
  const passwords = document.forms["myRegister"]["password"];
  const password = passwords[0].value;
  const retypePassword = passwords[1].value;


  if (password !== retypePassword) {
    errorMsg.innerHTML = "รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่";
    return false;
  }

  errorMsg.innerHTML = "";

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");

  event.preventDefault();
  window.location.href = "login.html";
  return true;
}
