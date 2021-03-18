const dMaker = new DonutMaker();


const clickDonut = document.querySelector("#donut__clicker");
const buyAutoClicker = document.querySelector("#buy__autoclicker");
const buyMultiplier = document.querySelector("#buy__multiplier");
let container = document.querySelector(".container");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function useAutoClickers() {
    dMaker.activateClickers();
    updateCounters();
    await sleep(100);
    useAutoClickers();
}

buyMultiplier.onclick = function buyMultiply() {
    if(dMaker.clickCount >= dMaker.donutMultiplierCost) {
        dMaker.addDonutMultiplier();
        updateCounters();
    }
}

buyAutoClicker.onclick = function buyAutoClick() {
    if(dMaker.clickCount >= dMaker.autoClickerCost) {
        dMaker.addClicker();
        updateCounters();
        
    }
}

clickDonut.onclick  = function addDonut() {
    dMaker.recordClick();
    updateCounters();
}

function updateCounters() {
    const donutCount = document.querySelector(".donut__count");
    donutCount.innerHTML = `Donut Count: ${dMaker.clickCount.toFixed(3)}`;
    const autoClickerCount = document.querySelector(".autoclicker__count");
    autoClickerCount.innerHTML = `AutoClicker Count: ${dMaker.autoClickers}`;
    const autoClickerPrice = document.querySelector(".autoclicker__price");
    autoClickerPrice.innerHTML = `Autoclicker price: ${dMaker.autoClickerCost} donuts`;
    const donutMultiplerPrice = document.querySelector(".multiplier__price");
    donutMultiplerPrice.innerHTML = `Donut multiplier price: ${dMaker.donutMultiplierCost} donuts`;
    const currentMultiplier = document.querySelector(".current__multiplier");
    currentMultiplier.innerHTML = `Current Multiplier: ${dMaker.donutMultiplier.toFixed(3)}`;

}

useAutoClickers();
