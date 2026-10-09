// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

var postcount = 0
function setupFunction() {
    
    var top = document.getElementById("top");
    var button = document.getElementsByTagName ("button");
    button[0].onclick = postFunction;
    button[1].onclick = clearFunction;
    top.innerHTML = "Welcome to the form";
   
}



function postFunction() {
        let message = document.getElementById("message").value;
    if (postcount == 0) {
        document.getElementById("topic").innerHTML = message;
        postcount++;
    }
    else if (postcount == 1) {
           document.getElementById("reply1").innerHTML = message;
        postcount++;
    }
    else if (postcount == 2) {
             document.getElementById("reply2").innerHTML = message;
        postcount++;
    }
    else{
           document.getElementById("topic").innerHTML = message;
              document.getElementById("reply1").innerHTML = '';
                 document.getElementById("reply2").innerHTML = '';
                 postcount = 1;

    }
    document.getElementById("message").value = '';
}

function clearFunction() {
    let message = document.getElementById("message").value;
     document.getElementById("topic").innerHTML = '';
          document.getElementById("reply1").innerHTML = '';
           document.getElementById("reply2").innerHTML = '';
           postcount = 0;
            document.getElementById("message").value = '';
}
