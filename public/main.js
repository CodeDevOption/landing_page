(()=>{
const hours = Selector(".hours");
const minutes = Selector(".minutes");
const seconds = Selector(".seconds");
const swich = document.getElementById('switch');
const img = document.getElementById('img');
setInterval(() => {
    const date = new Date();
    hours.textContent = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
    minutes.textContent = date.getMinutes()< 10 ? `0${date.getMinutes()}`: date.getMinutes();;
    seconds.textContent = date.getSeconds()< 10 ? `0${date.getSeconds()}`: date.getSeconds();;
}, 1000);
swich.onchange = (e)=>{
    if(e.target.checked){
        console.log(img.src);
        img.src = "../assets/Night_5.png";
        
    }else{
        img.src = "../assets/Night_4.png";
    }
}

})();

function Selector(element){
    return document.querySelector(element);
}
