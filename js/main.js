const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function decide_width() {
  if (425 > window.screen.width) return "100%";
  else return "300px";
}
function toggleNav() {
  if (document.getElementById("dropdownMenuContent").clientWidth == "0")
    document.getElementById("dropdownMenuContent").style.width = decide_width();
  else document.getElementById("dropdownMenuContent").style.width = "0";
}

const dropdownbtn = document.getElementById("dropdownMenuButton");

function togglemenu() {
  const menu = document.getElementById("dropdownMenuContent");
  menu.classList.toggle("show");
}

dropdownbtn.addEventListener("click", togglemenu);
