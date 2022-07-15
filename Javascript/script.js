
/* home page */
const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add("active");
    })
}
// removing hamburger menu by clicking close icon 
const close=document.getElementById("close");
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active");
    })
}
