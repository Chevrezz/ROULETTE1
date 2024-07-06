/**
 * @title llama_mask
 * @date 3/07/2024
 */

function login() {
  let user_name = document.getElementById('user_name').value

  if (user_name == "" || user_name == null) {
    alert("complete los campos");
    return 0;
  } 

  localStorage.setItem('user_mask', user_name);
  window.open('llama_mask.html', '_self')
}

function image_back() {
  window.open('llama_mask.html', '_self')
}

var c = 0;
function mask() {
  var cartera = document.getElementById('cartera');

  if (c < 1) {
    cartera.style.display = "flex";
    c++
  } else {
    cartera.style.display = "none";
    c--
  }
}
