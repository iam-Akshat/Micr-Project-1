const mainComment = document.getElementsByClassName("main-comment")[0];
const hiddenEls = document.getElementsByClassName("hide");

function removeHide(k){
    for (const el of hiddenEls) {
        console.log(el.style.display="block");
    }
}
mainComment.addEventListener("click",function(){
   
    //console.log(hiddenEls.length);
    // for(let k=0;k<hiddenEls.length;k++){
    //     console.log(k,"s",hiddenEls.length);
    //     //console.log(hiddenEls[k].classList.remove("hide")); 
       
    //    removeHide(k);
    // }
    
    console.log('display full form');
})