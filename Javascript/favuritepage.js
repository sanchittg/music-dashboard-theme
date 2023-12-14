
let addMusic = document.getElementById("toAddMusic");
let popupAppear = document.getElementById("popup");
let save = document.getElementById("saveButton");
let tableBody = document.getElementById("tBody");
let addMusicName = document.getElementById("newFavMusic");
let addArtistName = document.getElementById("newArtist");
let rankingNum = document.getElementById("rankingNum");
let interface = document.getElementById("interface");
let navigation = document.getElementById("navigation");

// function openPopup(){
//     console.log(popupAppear)
//     popupAppear.classList.add('opencontainer');
// }
function openPopup(){
    popupAppear.style.display = "block";
    interface.style.filter = "blur(1px)";
    navigation.style.width = "100%";
}

function newRow(){
    let row = tableBody.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    c1.textContent = "#10";
    c2.textContent = addMusicName.value;
    c3.textContent = addArtistName.value;
    c4.textContent = "1.45cr."
    popupAppear.style.display = "none";
    interface.style.filter = "none";
}

addMusic.addEventListener("click",openPopup);
save.addEventListener("click", newRow);