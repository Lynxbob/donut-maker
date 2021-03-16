



describe("ITERATION 1", () => {

    let underTest;

    beforeEach(() => {
    underTest = new DonutMaker();
    });

    describe("Can add to Donut Count", () => {
        it("Should start with a click of 0", () => {
            
            expect(underTest.clickCount).toBe(0);
        });

        it("Should add one click to the count when click happens", () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });

        it("Should have a clickCount of 2 if clicks Recorded", () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
        
    });


    describe("Be able to purchase auto clicker", () => {
        it("Can retrieve auto clicker count", () => {
            expect(underTest.autoClickers).toBe(0);
    
        });

        it("Can add to auto clicker count", () => {
            underTest.addClicker();
            expect(underTest.autoClickers).toBe(1);
    
        });

        it("Can subtract clicker cost from donuts", () => {
            underTest.addClicker();
            expect(underTest.autoClickers).toBe(1);
            expect(underTest.clickCount).toBe(-100);
            
    
        });

    });

    describe("Autoclicker Cost goes up when buying ", () => {
        it("first autoclicker cost goes up by 10%", () => {
            underTest.addClicker();
            expect(underTest.autoClickerCost).toBe(110);
    
        });

        it("additional autoclicker cost goes up by 10%", () => {
            underTest.addClicker();
            underTest.addClicker();
            expect(underTest.autoClickerCost).toBe(121);
    
        });


    });


    describe("Autoclickers effect donut count ", () => {
        it("autoclickers activate and should leave click count at -208", () => {
            underTest.addClicker();
            underTest.addClicker();
            underTest.activateClickers();
            expect(underTest.clickCount).toBe(-208);
    
        });
    });

});