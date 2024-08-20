// sticky header js start
let nav = document.querySelector("#nav")
window.addEventListener ("scroll", function(){
    let sticky = window.scrollY;
    if (sticky > 100) {
        nav.classList.add("sticky_menu");
    } else {
        nav.classList.remove("sticky_menu");
    }
})
// sticky header js end