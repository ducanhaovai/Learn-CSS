function changeImg(id) {
  let imgPatch = document.getElementById(id).getAttribute("src");
  document.getElementById("img-main").setAttribute("src", imgPatch);
}
