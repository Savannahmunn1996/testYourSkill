const startMin = 8;
let time = startMin * 60;
const countDownEl = document.getElementById("timer");
setInterval(letsCount, 1000);

function letsCount()
    { const minutes = math.floor(time / 60);
    let seconds = time % 60;
    countDownEl.innerHTML = (minutes) (seconds);
    time--;
}


