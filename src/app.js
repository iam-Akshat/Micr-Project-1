const mainComment = document.getElementsByClassName("main-comment")[0];
const hiddenEls = document.getElementsByClassName("hide");

function removeHide(k){
    for (const el of hiddenEls) {
        console.log(el.style.display="block");
    }
}