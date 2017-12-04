var expect = require("chai").expect;

describe('Array', () => {
  describe('Verify the #indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(0)).to.be.equal(-1);
      expect([1, 2, 3].indexOf(5)).to.be.equal(-1);
      expect([1, 2, 3].indexOf(3)).to.be.equal(2);
    });
  });
});

describe("Testing async behaviour", () => {
  var foo = false;
  before((done) => {
    setTimeout(() => {
      foo = true;
      done();  
    }, 1000);
  });
  it("should pass (with done called)", function () {
    expect(foo).to.equal(true);
  });
});
