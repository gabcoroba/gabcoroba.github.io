const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
var dark = true;
document.querySelector('.theme-toggle-btn').addEventListener
('click', () => {
    document.body.classList.toggle('light');
    if(dark){
        sun.style.display= "none";
        moon.style.display= "flex";
        dark = false;
    } else {
        sun.style.display= "flex";
        moon.style.display= "none";
        dark = true; 
    }
})
