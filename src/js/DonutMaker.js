class DonutMaker {

    constructor() {
        this.clickCount = 0;
        this.autoClickers = 0;
        this.autoClickerCost = 100;
        this.donutMultiplier = 1;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 1000;
        this.donutsPerSecond = 0;
    }

    addClicker() {
        this.autoClickers++;
        this.clickCount -= this.autoClickerCost;
        this.autoClickerCost *= 1.1;
        this.autoClickerCost = parseInt(this.autoClickerCost);
        this.donutsPerSecond = this.autoClickers * this.donutMultiplier;
    }

    addDonutMultiplier() {
        this.clickCount -= this.donutMultiplierCost;
        this.donutMultiplierCount++;
        this.donutMultiplierCost *= 1.5;
        this.donutMultiplierCost = parseInt(this.donutMultiplierCost);
        this.donutMultiplier = Math.pow(1.2, this.donutMultiplierCount);
        this.donutsPerSecond = this.autoClickers * this.donutMultiplier;
        
    }


    recordClick() {
        let donutsToAdd = 1 * this.donutMultiplier;
        this.clickCount += donutsToAdd;
    }

    activateClickers() {
        this.clickCount += (this.autoClickers * this.donutMultiplier)/10;
    }

    resetGame() {
        this.clickCount = 0;
        this.autoClickers = 0;
        this.autoClickerCost = 100;
        this.donutMultiplier = 1;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 1000;
        this.donutsPerSecond = 0;
    }



}