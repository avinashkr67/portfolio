let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

function onClickMenu(){
    document.getElementById('menu-button').classList.toggle('icon');

    document.getElementById('nav-ul').classList.toggle('change-ul');

}
