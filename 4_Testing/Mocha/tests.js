const chai = require("chai");
const expect = chai.expect;

describe("Describe can be used to group testcases", () => {
    it("this is an example test", (done) => {
        let a = 4;
        expect(a).to.not.be.undefined;
        expect(a).to.not.be.null;
        expect(a).to.equal(4);
        done();
    });

    it("this is a broken test", function() {
        /**
         * Can you fix this test?
         */
        let a = 4;
        expect(a*a*a*a*a*a*a*a*a).to.equal(512);
    });
})