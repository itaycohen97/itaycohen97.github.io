const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function decide_width() {
  if (425 > window.screen.width) return "100%";
  else return "380px";
}
function toggleNav() {
  if (document.getElementById("Sidenav").clientWidth == "0")
    document.getElementById("Sidenav").style.width = decide_width();
  else document.getElementById("Sidenav").style.width = "0";
}

const sidenav_links = document.querySelectorAll("a");

sidenav_links.forEach((element) => {
  element.addEventListener("click", toggleNav);
});
