let handburgr = document.getElementsByClassName("handburgr_menu");
let sidebaar = document.getElementsByClassName("sidebar");

function appear(){
    if (handburgr) {
        bar.addEventListener('click', () => {
            sidebaar.classList.add('active');
        })
    };
}

handburgr.addEventListener("click", appear());
