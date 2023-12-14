let togglebutton = document.getElementById("handburgr_menu");
let mainNav = document.querySelector(".main_nav")
let closehamburger = document.getElementById("closehamburger");

function opentogglebtn(){
    mainNav.classList.add('open');
}
function closetogglebtn(){
    mainNav.classList.remove('open');
}
togglebutton.addEventListener("click",opentogglebtn);
closehamburger.addEventListener("click",closetogglebtn);



