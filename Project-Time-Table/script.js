var day = document.getElementById("day");
const col = document.querySelectorAll("check");
const tick = document.querySelectorAll('tick');
col.forEach(tick => tick.addEventListener("click",()=>{
tick.style.display = "none";
}));