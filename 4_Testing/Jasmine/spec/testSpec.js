describe("Describe can be used to group testcases", function() {
    it("this is an example test", function() {
        let a = 4;
        expect(a).toBeDefined();
        expect(a).not.toBeNull();
        expect(a).toEqual(4);
    });

    it("this is a broken test", function() {
        /**
         * Can you fix this test?
         */
        let a = 4;
        expect(a*a*a*a*a*a*a*a*a).toEqual(512);
    });
})