class DonutMaker {

    constructor() {
        this.clickCount = 0;
        this.autoClickers = 0;
        this.autoClickerCost = 100;
        this.donutMultiplier = 1;
        this.donutMultiplierCount = 0;
        this.donutMultiplerCost = 10;
    }

    addClicker() {
        this.autoClickers++;
        this.clickCount -= this.autoClickerCost;
        this.autoClickerCost *= 1.1;
        this.autoClickerCost = parseInt(this.autoClickerCost);
    }

    addDonutMultiplier() {
        this.donutMultiplierCount++;
        this.donutMultiplerCost *= 1.1;
        this.donutMultiplerCost = parseInt(this.donutMultiplerCost);
        this.donutMultiplier = Math.pow(1.2, this.donutMultiplierCount);
    }


    recordClick() {
        this.clickCount++;
    }

    activateClickers() {
        this.clickCount += this.autoClickers * this.donutMultiplier;
    }

}