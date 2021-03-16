const dMaker = new DonutMaker();


const clickDonut = document.querySelector("#donut__clicker");


clickDonut.onclick  = function addDonut() {
    dMaker.recordClick();
    updateDonutCounter();
}

function updateDonutCounter() {
    const donutCount = document.querySelector(".donut__count");
    donutCount.innerHTML = `Donut Count: ${dMaker.clickCount}`;
}

