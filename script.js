const shareContainer = document.querySelector(".share_container");
const shareIcon = document.querySelector(".share_icon");

function showShareContainer(){
  shareContainer.style.display = "flex";
  shareIcon.src = "./images/icon-share-hidden.svg";
  shareIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
}

function hideShareContainer(e){
  if (e.target != shareContainer && e.target !== shareIcon){
    shareContainer.style.display = "none";
    shareIcon.src = "./images/icon-share.svg";
    shareIcon.style.backgroundColor = " hsl(210, 46%, 95%)";
  }
}


shareIcon.addEventListener("click", showShareContainer);
window.addEventListener("click", hideShareContainer);