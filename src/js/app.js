let dMaker = new DonutMaker();


const clickDonut = document.querySelector("#donut__clicker");
const buyAutoClicker = document.querySelector("#buy__autoclicker");
const buyMultiplier = document.querySelector("#buy__multiplier");
let container = document.querySelector(".container");
const about = document.querySelector(".about");
const inspiration = document.querySelector(".inspiration");
const contactInfo = document.querySelector(".contact__info");
let dropdown = document.querySelector(".dropdown");
let dropdownInfo = document.querySelector(".info");
let header = document.querySelector(".header");
let reset = document.querySelector(".reset");
dropdown.mouseOver = false;


reset.onclick = function reset() {
    dMaker = new DonutMaker();
}

header.addEventListener("mouseout", () => {
    if(!dropdown.mouseOver) {
        dropdown.style.visibility = "hidden";
    }
});


header.addEventListener("mouseover", () => {
    dropdown.style.visibility = "visible";

});


contactInfo.addEventListener("mouseover", () => {
    dropdown.style.visibility = "visible";
    dropdownInfo.innerHTML = `Thank you for playing my game!
    <ul class = "contact__list">
    <li>Branden Webb</li>
    <li><a href="https://www.linkedin.com/in/branden-webb-29b616207/">My Linkedin</a></li>
    <li><a href="https://lynxbob.github.io/">My Portfolio</a></li>
    <li>brandenswebb@hotmail.com</li>
    </ul>`;
    dropdown.style.textAlign = "center";

});

about.addEventListener("mouseover", () => {
    dropdown.style.visibility = "visible";
    dropdownInfo.innerHTML = `Welcome to Fred the Baker Baking Company's donut Maker! This is a video game where you try to make as many donuts as possible
    by clicking on the donut and purchasing upgrades. Have fun!`
    dropdown.style.textAlign = "left";

});

dropdown.addEventListener("mouseover", () => {
    dropdown.mouseOver = true;
    dropdown.style.visibility = "visible";
});

dropdown.addEventListener("mouseout", () => {
    dropdown.mouseOver = false;
    dropdown.style.visibility = "hidden";
});




inspiration.addEventListener("mouseover", () => {
    inspiration.mouseOver = true;
    dropdown.style.visibility = "visible";
    let anchor = document.createElement("a");
    anchor.href = "https://orteil.dashnet.org/cookieclicker/"
    anchor.innerHTML = "here is the link to that game."
    dropdownInfo.innerHTML = `The inspiration of this game comes from the famous game cookie clicker, and it's creator Orteil. if you want to check that out, ` ;
    dropdownInfo.appendChild(anchor);
    dropdown.style.textAlign = "left";

});

async function checkButtonsForDisable() {
    if(dMaker.autoClickerCost > dMaker.clickCount) {
        buyAutoClicker.disabled = true;
    } else {
        buyAutoClicker.disabled = false;
    }

    if(dMaker.donutMultiplierCost > dMaker.clickCount) {
        buyMultiplier.disabled = true;
    } else {
        buyMultiplier.disabled = false;
    }
    await sleep(100);
    checkButtonsForDisable();
}



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
    autoClickerCount.innerHTML = `Autoclicker Count: ${dMaker.autoClickers}`;
    const autoClickerPrice = document.querySelector(".autoclicker__price");
    autoClickerPrice.innerHTML = `Autoclicker price: ${dMaker.autoClickerCost} donuts`;
    const donutMultiplerPrice = document.querySelector(".multiplier__price");
    donutMultiplerPrice.innerHTML = `Donut multiplier price: ${dMaker.donutMultiplierCost} donuts`;
    const currentMultiplier = document.querySelector(".current__multiplier");
    currentMultiplier.innerHTML = `Current Multiplier: ${dMaker.donutMultiplier.toFixed(3)}`;
    const dps = document.querySelector(".donuts__per__second");
    dps.innerHTML = `Donuts per second: ${dMaker.donutsPerSecond.toFixed(3)}`;

}


useAutoClickers();
checkButtonsForDisable();
